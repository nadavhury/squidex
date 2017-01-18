﻿// ==========================================================================
//  ContentCreated.cs
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex Group
//  All rights reserved.
// ==========================================================================

using System;
using Squidex.Core.Contents;
using Squidex.Infrastructure;
using Squidex.Infrastructure.CQRS.Events;

namespace Squidex.Events.Contents
{
    [TypeName("ContentCreatedEvent")]
    public class ContentCreated : IEvent
    {
        public Guid SchemaId { get; set; }

        public ContentData Data { get; set; }
    }
}