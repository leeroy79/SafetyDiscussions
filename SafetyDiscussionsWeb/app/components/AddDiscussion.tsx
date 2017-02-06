﻿import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

import { Discussion, FormMode } from './Discussion';
import { SafetyDiscussion } from '../models/SafetyDiscussion';

export interface IAddDiscussionProps {
    NewDiscussionCreated: (discussion: SafetyDiscussion) => void;
}

export interface IAddDiscussionState {
    showDialog: boolean;
}


export class AddDiscussion extends React.Component<IAddDiscussionProps, IAddDiscussionState> {

    constructor() {
        super();
        this.state = {
            showDialog: false
        };
    }

    // Main renderer.
    render() {

        return (
            <div>
                <Button description='Opens the dialog to create a discussion' onClick={this.showDialog.bind(this)}>
                    Add Safety Discussion
                </Button>
                <Dialog
                    isOpen={this.state.showDialog}
                    type={DialogType.close}
                    onDismiss={this.closeDialog.bind(this)}
                    title='Add Discussion'
                    subText='Please enter the details for the safety discussion.'
                    isBlocking={false}
                    closeButtonAriaLabel='Close'
                    >
                    <Discussion
                        FormMode={FormMode.New}
                        Discussion={null}
                        DialogClose={this.closeDialog.bind(this)}
                        NewDiscussionCreated={this.newDiscussionCreated.bind(this)} />
                </Dialog>
            </div>
        );
    }

    // New discussion has been created. Pass up to parent.
    private newDiscussionCreated(discussion: SafetyDiscussion) {
        this.setState({ showDialog: false });
        this.props.NewDiscussionCreated(discussion);
    }

    private showDialog() {
        this.setState({ showDialog: true });
    }

    private closeDialog() {
        this.setState({ showDialog: false });
    }
}