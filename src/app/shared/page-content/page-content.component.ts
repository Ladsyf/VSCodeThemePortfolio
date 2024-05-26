import { IFileTab } from './../../core/explorer/ifile-tree-tab';
import { AfterViewInit, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { MybackgroundComponent } from '../../pages/mybackground/mybackground.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { SocialsComponent } from '../../pages/socials/socials.component';
import { getPageComponentTypeValue } from '../../pages/helpers';
import { PageService } from '../../pages/page.service';

export type pageComponentTypes = HomepageComponent |
  ContactsComponent |
  MybackgroundComponent |
  ProjectsComponent |
  SocialsComponent;

interface ITabPageComponents
{
  id: number;
  component: ComponentRef<pageComponentTypes>;
}

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})
export class PageContentComponent implements AfterViewInit
{
  @ViewChild('pageContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  public tabPageComponents: ITabPageComponents[] = [];

  constructor(private _pageService: PageService) { }

  public ngAfterViewInit(): void
  {
    this._pageService.getHistorySubscription(state =>
    {
      const tabs = state.present.tabs ?? [];
      this.updatePageContentComponents(tabs);
      this.updateComponentsVisibility(tabs);
    });
  }

  private updatePageContentComponents(tabs: IFileTab[])
  {
    const newPageIds = this.getNewPageIdsAdded(tabs);
    const hasNewPages = newPageIds.length > 0;
    if (hasNewPages) this.addNewPagesToTabPageComponents(newPageIds, tabs);

    const pageIdsToRemove = this.getRemovedPageIds(tabs);
    const hasRemovedPages = pageIdsToRemove.length > 0;
    if (hasRemovedPages) this.removePagesFromTabPageComponents(pageIdsToRemove);
  }

  private updateComponentsVisibility(tabs: IFileTab[])
  {
    const openedPageId = tabs.find(x => x.isOpened)?.id;
    this.tabPageComponents.forEach(x =>
    {
      if (x.id === openedPageId)
        this.removeHidenAttributeToComponent(x.component);
      else
        this.addHiddenAttributeToComponent(x.component);
    });
  }

  private addHiddenAttributeToComponent(component: ComponentRef<pageComponentTypes>)
  {
    component.location.nativeElement.setAttribute("hidden", "true");
  }

  private removeHidenAttributeToComponent(component: ComponentRef<pageComponentTypes>)
  {
    component.location.nativeElement.removeAttribute("hidden");
  }

  private addNewPagesToTabPageComponents(pageIdsToAdd: number[], tabs: IFileTab[])
  {
    pageIdsToAdd.forEach(x =>
    {
      const file = tabs.filter(y => y.id === x)[0];
      const component = this.container.createComponent(getPageComponentTypeValue(file.page));
      this.tabPageComponents.push({
        id: x,
        component
      });
    });
  }

  private removePagesFromTabPageComponents(pageIdsToRemove: number[])
  {
    this.tabPageComponents = this.tabPageComponents.filter(x =>
    {
      if (pageIdsToRemove.some(y => y === x.id))
      {
        x.component.destroy()
        return false;
      }
      return true;
    });
  }

  private getRemovedPageIds(tabs: IFileTab[]): number[]
  {
    return this.tabPageComponents.filter(x =>
    {
      const existsInTabs = tabs.some(y => y.id === x.id);
      return !existsInTabs;
    }).map(x => x.id);
  }

  private getNewPageIdsAdded(tabs: IFileTab[]): number[]
  {
    return tabs.filter(x =>
    {
      const existsInTabPageComponents = this.tabPageComponents.some(y => y.id === x.id)
      return !existsInTabPageComponents;
    }).map(x => x.id);
  }
}
