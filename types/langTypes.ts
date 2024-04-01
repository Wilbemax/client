export interface RootInterface {
  en: En
  ru: Ru
}

export interface Ru {
  common: Common
  header: Header
  main_menu: Mainmenu
  comparison: Comparison
  breadcrumbs: Breadcrumbs
  footer: Footer
  main_page: Mainpage
  product: Product
  catalog: Catalog
  size_table: Sizetable
  auth_popup: Authpopup
  validation: Validation
  order: Order2
}

export interface Order2 {
  agreement_text: string
  agreement_link: string
  make_order: string
  worth: string
  amount_with_discounts: string
  total: string
  order: string
  delivery: string
  payment: string
  pay: string
  recipient_details: string
  name: string
  size: string
  color: string
  count: string
  sum: string
  delivery_way: string
  pickup_point: string
  by_courier: string
  search_title: string
  search_placeholder: string
  latitude: string
  longitude: string
  courier_warning: string
  choose: string
  pickup_free: string
  courier_delivery: string
  online_payment: string
  upon_receipt: string
  payment_advice: string
  card_number: string
  qr_code: string
  cash_office: string
  card_office: string
  enter_details: string
  name_label: string
  surname_label: string
  phone_label: string
  comment_label: string
  promocode: string
  promo_code_text: string
}

export interface En {
  common: Common
  header: Header
  main_menu: Mainmenu
  comparison: Comparison
  breadcrumbs: Breadcrumbs
  footer: Footer
  main_page: Mainpage
  product: Product
  catalog: Catalog
  size_table: Sizetable
  auth_popup: Authpopup
  validation: Validation
  order: Order
}

export interface Order {
  agreement_text: string
  agreement_link: string
  make_order: string
  worth: string
  amount_with_discounts: string
  total: string
  order: string
  delivery: string
  payment: string
  recipient_details: string
  name: string
  size: string
  color: string
  count: string
  sum: string
  delivery_way: string
  pickup_point: string
  by_courier: string
  search_title: string
  search_placeholder: string
  latitude: string
  longitude: string
  courier_warning: string
  choose: string
  pickup_free: string
  courier_delivery: string
  online_payment: string
  upon_receipt: string
  payment_advice: string
  card_number: string
  qr_code: string
  cash_office: string
  card_office: string
  enter_details: string
  name_label: string
  surname_label: string
  phone_label: string
  comment_label: string
  promocode: string
  promo_code_text: string
}

export interface Validation {
  invalid_value: string
  requiredName: string
  invalid_phone: string
  required_email: string
  invalid_email: string
  min_2: string
  max_15: string
  required_password: string
  min_4: string
  max_20: string
}

export interface Authpopup {
  registration_title: string
  registration_text: string
  registration_description: string
  registration_question: string
  login_text: string
  login_description: string
  forgot_password: string
  login_question: string
  register: string
  name: string
  password: string
}

export interface Sizetable {
  head_circumference: string
  size: string
  russian_size: string
  manufacturer_size: string
  chest_circumference: string
  waist_circumference: string
  hip_circumference: string
  title: string
}

export interface Catalog {
  all_categories: string
  popular: string
  new: string
  cheap_first: string
  expensive_first: string
  categories: string
  sort: string
  price: string
  from: string
  to: string
  rub: string
  done: string
  size: string
  color: string
  purpure: string
  orange: string
  yellow: string
  black: string
  white: string
  cotton: string
  synthetics: string
  polyester: string
}

export interface Product {
  available: string
  not_available: string
  vendor_code: string
  size_table: string
  count: string
  to_cart: string
  to_favorite: string
  description: string
  characteristics: string
  collection_goods: string
  watched: string
  add_to_favorites: string
  add_to_comparison: string
  quick_view: string
  total_in_cart: string
  more: string
  composition: string
  in_cart: string
}

export interface Mainpage {
  hero_hidden_title: string
  hero_title: string
  hero_description: string
  hero_subtitle: string
  catalog_btn: string
  category_title: string
  category_cloth: string
  category_office: string
  category_accessories: string
  category_souvenirs: string
  bestsellers_title: string
  new_title: string
  brand_title: string
  brand_nature: string
  brand_look: string
  brand_idea: string
  is_new: string
  is_bestseller: string
  tShirt: string
  violet: string
  orange: string
  black: string
}

export interface Footer {
  copyright: string
  policy: string
  privacy: string
  mobile_version: string
  full_version: string
}

export interface Breadcrumbs {
  main: string
  comparison: string
  cart: string
  favorites: string
  catalog: string
  profile: string
  cloth: string
  accessories: string
  office: string
  souvenirs: string
  order: string
  personal_data_policy: string
  privacy_policy: string
}

export interface Comparison {
  umbrella: string
  bags: string
  outerwear: string
  'long-sleeves': string
  headdress: string
  hoodie: string
  'business-souvenirs': string
  'promotional-souvenirs': string
  pen: string
  notebook: string
  't-shirts': string
  main_heading: string
}

export interface Mainmenu {
  catalog: string
  buyers: string
  contacts: string
  cloth: string
  accessories: string
  souvenirs: string
  office: string
  all: string
  about: string
  blog: string
  shipping: string
  returns: string
  tg: string
  vk: string
}

export interface Header {
  menu_btn: string
  search_products: string
  search_infos: string
  profile: string
  logout: string
}

export interface Common {
  all_link: string
  more: string
  oh: string
  empty_text: string
  cart_empty: string
  cart_empty_advice: string
  comparison_empty: string
  comparison_empty_advice: string
  favorites_empty: string
  favorites_empty_advice: string
  back_to_main: string
  empty: string
  go_shopping: string
  go_catalog: string
  nothing_is_found: string
  close: string
  loading: string
  ad: string
  accept: string
  cookie_text: string
  not_found_title: string
  ops: string
  not_found_subtitle: string
  not_found_description: string
  not_found_bg: string
  order_price: string
}
