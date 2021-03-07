// 模块
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ResourceModule } from './resource/resource.module';

@NgModule({
  declarations: [
    // 声明模块中有什么东西，只能声明组件 指令 管道
    AppComponent,
    HeaderComponent
  ],
  imports: [
    // 声明该模块所依赖的模块
    BrowserModule,
    ResourceModule
  ],
  bootstrap: [
    // 声明主组件是什么
    AppComponent
  ]
})
export class AppModule {

}
