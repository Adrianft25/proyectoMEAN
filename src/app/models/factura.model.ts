export interface Factura {
  _fieldsProto: FieldsProto
}

export interface FieldsProto {
  datosPago: DatosPago
  fecha: Fecha
  total: Total
  idUsuario: IdUsuario
  datosItems: DatosItems
  numeroPedido: NumeroPedido
  datosEnvio: DatosEnvio
}

export interface DatosPago {
  mapValue: MapValue
  valueType: string
}

export interface MapValue {
  fields: Fields
}

export interface Fields {
  address: Address
  email_address: EmailAddress
  name: Name
  payer_id: PayerId
}

export interface Address {
  mapValue: MapValue2
  valueType: string
}

export interface MapValue2 {
  fields: Fields2
}

export interface Fields2 {
  country_code: CountryCode
}

export interface CountryCode {
  stringValue: string
  valueType: string
}

export interface EmailAddress {
  stringValue: string
  valueType: string
}

export interface Name {
  mapValue: MapValue3
  valueType: string
}

export interface MapValue3 {
  fields: Fields3
}

export interface Fields3 {
  surname: Surname
  given_name: GivenName
}

export interface Surname {
  stringValue: string
  valueType: string
}

export interface GivenName {
  stringValue: string
  valueType: string
}

export interface PayerId {
  stringValue: string
  valueType: string
}

export interface Fecha {
  stringValue: string
  valueType: string
}

export interface Total {
  stringValue: string
  valueType: string
}

export interface IdUsuario {
  stringValue: string
  valueType: string
}

export interface DatosItems {
  arrayValue: ArrayValue
  valueType: string
}

export interface ArrayValue {
  values: Value[]
}

export interface Value {
  mapValue: MapValue4
  valueType: string
}

export interface MapValue4 {
  fields: Fields4
}

export interface Fields4 {
  quantity: Quantity
  name: Name2
  unit_amount: UnitAmount
  category: Category
}

export interface Quantity {
  stringValue: string
  valueType: string
}

export interface Name2 {
  stringValue: string
  valueType: string
}

export interface UnitAmount {
  mapValue: MapValue5
  valueType: string
}

export interface MapValue5 {
  fields: Fields5
}

export interface Fields5 {
  value: Value2
  currency_code: CurrencyCode
}

export interface Value2 {
  stringValue: string
  valueType: string
}

export interface CurrencyCode {
  stringValue: string
  valueType: string
}

export interface Category {
  stringValue: string
  valueType: string
}

export interface NumeroPedido {
  stringValue: string
  valueType: string
}

export interface DatosEnvio {
  mapValue: any
  valueType: string
}

