export const API_ENDPOINTS = {
  deposits: '/dashboard',

  depositById: (id: string) =>
    `/depositos/${id}`,

  depositHistory: (id: string) =>
    `/historico/deposito/${id}`,

  generalHistory:
    '/historico/general',
}