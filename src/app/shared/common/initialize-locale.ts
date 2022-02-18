import {registerLocaleData} from '@angular/common';

export function initializeLocale(langId: string): Promise<void> {
  // Magic comments
  // https://webpack.js.org/guides/code-splitting/
  // return import(
  //   /* webpackInclude: /(ru|ky)\.js$/ */
  //   `src/assets/i18n/${langId}.json`
  //   )
  //   .then((module) => {
  //     registerLocaleData(module.default);
  //   })
  //   .catch((error) => {
  //     console.error('This is language id not found!');
  //     console.error(error);
  //     throw error;
  //   });
  return new Promise<void>(()=>0);
}
