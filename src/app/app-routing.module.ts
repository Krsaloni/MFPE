import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtensionRequestListComponent } from './extension-request-list/extension-request-list.component';
import { NewExtensionRequestFormComponent } from './new-extension-request-form/new-extension-request-form.component';
import { RespondExtensionComponent } from './respond-extension/respond-extension.component';
const routes: Routes = [
  { path: 'requests', component: ExtensionRequestListComponent },
  { path: 'newrequest', component: NewExtensionRequestFormComponent },
  { path: '', redirectTo: 'requests', pathMatch: 'full' },
  { path: 'respondextension', component: RespondExtensionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
