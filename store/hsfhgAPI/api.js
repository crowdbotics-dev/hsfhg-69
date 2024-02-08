import axios from "axios"
const hsfhgAPI = axios.create({
  baseURL: "https://hsfhg-69.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return hsfhgAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return hsfhgAPI.post(`/api/v1/login/`, payload)
}
function api_v1_sddjbjkwev_list(payload) {
  return hsfhgAPI.get(`/api/v1/sddjbjkwev/`)
}
function api_v1_sddjbjkwev_create(payload) {
  return hsfhgAPI.post(`/api/v1/sddjbjkwev/`, payload)
}
function api_v1_sddjbjkwev_retrieve(payload) {
  return hsfhgAPI.get(`/api/v1/sddjbjkwev/${payload.id}/`)
}
function api_v1_sddjbjkwev_update(payload) {
  return hsfhgAPI.put(`/api/v1/sddjbjkwev/${payload.id}/`, payload)
}
function api_v1_sddjbjkwev_partial_update(payload) {
  return hsfhgAPI.patch(`/api/v1/sddjbjkwev/${payload.id}/`, payload)
}
function api_v1_sddjbjkwev_destroy(payload) {
  return hsfhgAPI.delete(`/api/v1/sddjbjkwev/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return hsfhgAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return hsfhgAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return hsfhgAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return hsfhgAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return hsfhgAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return hsfhgAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return hsfhgAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return hsfhgAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return hsfhgAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return hsfhgAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return hsfhgAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return hsfhgAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_sddjbjkwev_list,
  api_v1_sddjbjkwev_create,
  api_v1_sddjbjkwev_retrieve,
  api_v1_sddjbjkwev_update,
  api_v1_sddjbjkwev_partial_update,
  api_v1_sddjbjkwev_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
