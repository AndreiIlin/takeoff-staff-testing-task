const apiPath = '/api/v1';
type Routes = {
  [key: string]: () => string
}

export const routes: Routes = {
  loginPagePath: () => '/login',
  contactsPagePath: () => '/',
  contactsData: () => [apiPath, 'contacts'].join('/'),
};
