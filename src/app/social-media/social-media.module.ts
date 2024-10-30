import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsListItemComponent } from './components/posts-list-item/posts-list-item.component';


@NgModule({
  declarations: [
    PostsListComponent,
    PostsListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
