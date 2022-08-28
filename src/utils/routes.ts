const apiPath = '/api/v1';
type Routes = {
  [key: string]: (id?: number) => string
}

export const routes: Routes = {
  loginPagePath: () => '/login',
  contactsPagePath: () => '/',
  contactsData: () => [apiPath, 'contacts'].join('/'),
  contactById: (id) => [apiPath, 'contacts', `${id}`].join('/'),
};
