import * as React from 'react';
import styles from './Node14.module.scss';
import { INode14Props } from './INode14Props';
import { PeoplePicker, PrincipalType } from '@pnp/spfx-controls-react/lib/PeoplePicker';
import { IViewField, ListView, SelectionMode } from '@pnp/spfx-controls-react/lib/ListView';

// Specify the fields that need to be viewed in the listview
const viewFields: IViewField[] = [
  {
    name: 'ListItemAllFields.Id',
    displayName: 'ID',
    maxWidth: 40,
    sorting: true,
    isResizable: true
  },
  {
    name: 'ListItemAllFields.Underscore_Field',
    displayName: "Underscore_Field",
    sorting: true,
    isResizable: true
  },
  {
    name: 'Name',
    linkPropertyName: 'ServerRelativeUrl',
    sorting: true,
    isResizable: true
  },
  {
    name: 'ServerRelativeUrl',
    displayName: 'Path',
    render: (item: any) => {
      return <a href={item['ServerRelativeUrl']}>Link</a>;
    },
    isResizable: true
  },
  {
    name: 'Title',
    isResizable: true
  }
];

export default class Node14 extends React.Component<INode14Props, {}> {
  public render(): React.ReactElement<INode14Props> {
    return (
      <div className={styles.node14}>
        <PeoplePicker
          data-Property="pnpPeoplePicker"
          context={this.props.context}
          titleText="PnP People Picker"
          personSelectionLimit={3}
          // groupName={"Team Site Owners"} // Leave this blank in case you want to filter from all users
          showtooltip={true}
          required={false}
          disabled={false}
          onChange={(items: any) => { }}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
        />
        <ListView items={[]}
          viewFields={viewFields}
          iconFieldName='ServerRelativeUrl'
          compact={true}
          selectionMode={SelectionMode.single}
          selection={() => {}}
          showFilter={true}
          dragDropFiles={true}
          stickyHeader={true}
        // defaultFilter="Team"
        />
      </div>
    );
  }
}
