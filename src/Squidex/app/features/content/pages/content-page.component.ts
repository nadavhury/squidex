/*
 * Squidex Headless CMS
 * 
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved
 */

import * as Ng2 from '@angular/core';

import {
    AppComponentBase,
    AppsStoreService,
    NotificationService,
    UsersProviderService
 } from 'shared';

@Ng2.Component({
    selector: 'sqx-content-page',
    styles,
    template
})
export class ContentPageComponent extends AppComponentBase {
    constructor(apps: AppsStoreService, notifications: NotificationService, users: UsersProviderService) {
        super(apps, notifications, users);
    }
}
