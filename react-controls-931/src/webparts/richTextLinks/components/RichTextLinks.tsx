import * as React from 'react';
import styles from './RichTextLinks.module.scss';
import { IRichTextLinksProps } from './IRichTextLinksProps';
import { RichText } from '@pnp/spfx-controls-react/lib/RichText';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface IRichTextLinksState {
  richTextValue?: string;
}

export default class RichTextLinks extends React.Component<IRichTextLinksProps, IRichTextLinksState> {

  constructor(props: IRichTextLinksProps) {
    super(props);
    this.state = {
      richTextValue: ''
    };
  }

  public render(): React.ReactElement<IRichTextLinksProps> {
    return (
      <div className={ styles.richTextLinks }>
        <RichText value={this.state.richTextValue} isEditMode={this.props.displayMode === DisplayMode.Edit} onChange={value => { this.setState({ richTextValue: value }); return value; }} />
      </div>
    );
  }
}
