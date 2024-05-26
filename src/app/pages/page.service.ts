import { IBaseTab, IFileFolderTab, IFileTab, IFileTreeTab } from './../core/explorer/ifile-tree-tab';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addHistory, redoHistory, setInitialHistory, undoHistory } from '../store/page.actions';
import { selectHistory } from '../store/page.selector';
import { LocalPageService } from './local-page.service';
import { IHistory, IHistoryState } from '../store/page.variables';

@Injectable({
  providedIn: 'root'
})
export class PageService
{

  constructor(private _store: Store, private _localPage: LocalPageService) { }

  public getHistory()
  {
    return this._store.select(selectHistory);
  }

  public getHistorySubscription(setter: (state: IHistoryState) => void)
  {
    this.getHistory().subscribe({
      next: (state: IHistoryState) =>
      {
        setter(state);
        this._localPage.setHistory(state);
      }
    });
  }

  public selectExplorerFolder(modifiedTab: IFileFolderTab)
  {
    const history = this._localPage.getHistory();
    const currentPage = history.present;
    this.clearSelected(currentPage);

    this.modifyExplorerHistory(currentPage, modifiedTab);
    this._store.dispatch(addHistory({ page: currentPage }));
  }

  public selectExplorerFile(file: IFileTab, addToTabs: boolean = false)
  {
    const modifiedTab: IFileTab = {
      ...file,
      isSelected: true,
      isOpened: true
    }
    const history = this._localPage.getHistory();
    const currentPage = history.present;
    this.clearSelected(currentPage);

    this.clearOpenedTabs(currentPage);
    this.openFile(currentPage, modifiedTab.id);
    if (addToTabs) currentPage.tabs = [...currentPage.tabs ?? [], modifiedTab as IFileTab];

    this.modifyExplorerHistory(currentPage, modifiedTab);
    this._store.dispatch(addHistory({ page: currentPage }));
  }

  public closeTabFile(file: IFileTab)
  {
    const tabToClose: IFileTab = {
      ...file,
      isSelected: false,
      isOpened: false
    }
    const history = this._localPage.getHistory();
    const currentPage = history.present;

    if (file.isOpened && (currentPage.tabs?.length ?? 0 <= 0))
    {
      const openedFileIndex = currentPage.tabs?.findIndex(x => x.isOpened) ?? 0;
      const fileTabIndexToOpen = currentPage.tabs?.[openedFileIndex - 1] ? openedFileIndex - 1 : openedFileIndex + 1;
      const fileTabToOpen = currentPage.tabs?.[fileTabIndexToOpen];

      if (fileTabToOpen && fileTabIndexToOpen > -1)
      {
        this.clearOpenedTabs(currentPage);
        this.openFile(currentPage, fileTabToOpen.id);
        const newFileTabToOpen: IFileTab = {
          ...fileTabToOpen,
          isSelected: true,
          isOpened: true,
        }
        this.modifyExplorerHistory(currentPage, newFileTabToOpen);
      }
    }
    this.removeFileTab(currentPage, file.id);

    this.modifyExplorerHistory(currentPage, tabToClose);
    this._store.dispatch(addHistory({ page: currentPage }));
  }

  public undoHistory()
  {
    this._store.dispatch(undoHistory());
  }

  public redoHistory()
  {
    this._store.dispatch(redoHistory());
  }

  public setInitialHistory(state: IHistoryState)
  {
    this._store.dispatch(setInitialHistory({ state }));
  }

  private modifyExplorerHistory(rootNode: IFileTreeTab, modifiedTab: IBaseTab, folder?: IFileFolderTab)
  {
    const currentNode = folder ? folder : rootNode;

    const changeIsInFile = currentNode.files.some(x => x.id === modifiedTab.id);
    const changeIsInFolder = currentNode.folders?.some(x => x.id === modifiedTab.id);
    const changeIsNotInThisNode = !(changeIsInFile || changeIsInFolder);

    if (changeIsNotInThisNode)
    {
      currentNode.folders?.forEach(x =>
      {
        this.modifyExplorerHistory(rootNode, modifiedTab, x);
      });
      return
    }

    if (changeIsInFolder)
    {
      currentNode.folders?.forEach(x =>
      {
        if (x.id === modifiedTab.id)
        {
          modifiedTab = modifiedTab as IFileFolderTab;
          x.isOpened = modifiedTab.isOpened;
          x.isSelected = modifiedTab.isSelected;
        }
      })
      return
    }

    if (changeIsInFile)
    {
      currentNode.files?.forEach(x =>
      {
        if (x.id === modifiedTab.id)
        {
          modifiedTab = modifiedTab as IFileFolderTab;
          x.isOpened = modifiedTab.isOpened;
          x.isSelected = modifiedTab.isSelected;
        }
      })
      return
    }
  }

  private clearSelected(history: IHistory)
  {
    history.folders?.forEach(x =>
    {
      x.isSelected = false
      this.clearSelected(x)
    })
    history.files.forEach(x =>
    {
      x.isSelected = false;
    })
  }
  private clearOpenedTabs(history: IHistory)
  {
    history.tabs?.forEach(x =>
    {
      x.isOpened = false
    })
  }
  private openFile(history: IHistory, id: number)
  {
    history.tabs?.forEach(x =>
    {
      if (x.id === id)
        x.isOpened = true
    });
  }

  private removeFileTab(history: IHistory, id: number)
  {
    const newTabs = history.tabs?.filter(x => x.id != id);
    history.tabs = newTabs;
  }
}
