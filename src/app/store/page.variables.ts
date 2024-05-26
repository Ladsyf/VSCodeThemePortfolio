import { IFileTreeTab, IFileTab } from "../core/explorer/ifile-tree-tab";

export interface IHistoryState
{
  past: IHistory[],
  present: IHistory,
  future: IHistory[]
}

export interface IHistory extends IFileTreeTab
{
  tabs?: IFileTab[]
}

export const initialState: IHistoryState = {
  past: [],
  present: {
    folders: [
      {
        id: 1,
        isSelected: false,
        isOpened: true,
        name: "About Me",
        files: [
          {
            id: 2,
            isSelected: false,
            isOpened: false,
            name: "mybackground.html",
            iconProps: {
              iconName: "html",
              height: 7,
              width: 10
            },
            page: "myBackground"
          },
          {
            id: 3,
            isSelected: false,
            isOpened: false,
            name: "projects.html",
            iconProps: {
              iconName: "html",
              height: 7,
              width: 10
            },
            page: "projects"
          },
        ]
      },
      {
        id: 4,
        isSelected: false,
        isOpened: true,
        name: "Contact Me",
        files: [
          {
            id: 5,
            isSelected: false,
            isOpened: false,
            name: "socials.html",
            iconProps: {
              iconName: "html",
              height: 7,
              width: 10
            },
            page: "socials"
          },
          {
            id: 6,
            isSelected: false,
            isOpened: false,
            name: "contactMe.html",
            iconProps: {
              iconName: "html",
              height: 7,
              width: 10
            },
            page: "contacts"
          },
        ]
      },
    ],
    files: [{
      id: 7,
      isSelected: true,
      isOpened: true,
      name: "homepage.html",
      iconProps: {
        iconName: "html",
        height: 7,
        width: 10
      },
      page: "homepage"
    }],
    tabs: [
      {
        id: 7,
        isSelected: true,
        isOpened: true,
        name: "homepage.html",
        iconProps: {
          iconName: "html",
          height: 7,
          width: 10
        },
        page: "homepage"
      }
    ]
  },
  future: [],
};
