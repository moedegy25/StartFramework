import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



//   window.addEventListener("scroll", function () {
//     console.log("تم التمرير داخل الصفحة! المسافة: " + window.scrollY + "px");
// });
