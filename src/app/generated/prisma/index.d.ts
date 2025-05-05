
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Gift
 * 
 */
export type Gift = $Result.DefaultSelection<Prisma.$GiftPayload>
/**
 * Model LoveCategory
 * 
 */
export type LoveCategory = $Result.DefaultSelection<Prisma.$LoveCategoryPayload>
/**
 * Model PersonLoveCategory
 * 
 */
export type PersonLoveCategory = $Result.DefaultSelection<Prisma.$PersonLoveCategoryPayload>
/**
 * Model SpecialDay
 * 
 */
export type SpecialDay = $Result.DefaultSelection<Prisma.$SpecialDayPayload>
/**
 * Model RejectedGiftIdea
 * 
 */
export type RejectedGiftIdea = $Result.DefaultSelection<Prisma.$RejectedGiftIdeaPayload>
/**
 * Model Trait
 * 
 */
export type Trait = $Result.DefaultSelection<Prisma.$TraitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TraitType: {
  likes: 'likes',
  loves: 'loves',
  dislikes: 'dislikes',
  hates: 'hates',
  struggling_with: 'struggling_with'
};

export type TraitType = (typeof TraitType)[keyof typeof TraitType]

}

export type TraitType = $Enums.TraitType

export const TraitType: typeof $Enums.TraitType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gift`: Exposes CRUD operations for the **Gift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gifts
    * const gifts = await prisma.gift.findMany()
    * ```
    */
  get gift(): Prisma.GiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loveCategory`: Exposes CRUD operations for the **LoveCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoveCategories
    * const loveCategories = await prisma.loveCategory.findMany()
    * ```
    */
  get loveCategory(): Prisma.LoveCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personLoveCategory`: Exposes CRUD operations for the **PersonLoveCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonLoveCategories
    * const personLoveCategories = await prisma.personLoveCategory.findMany()
    * ```
    */
  get personLoveCategory(): Prisma.PersonLoveCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialDay`: Exposes CRUD operations for the **SpecialDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialDays
    * const specialDays = await prisma.specialDay.findMany()
    * ```
    */
  get specialDay(): Prisma.SpecialDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rejectedGiftIdea`: Exposes CRUD operations for the **RejectedGiftIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RejectedGiftIdeas
    * const rejectedGiftIdeas = await prisma.rejectedGiftIdea.findMany()
    * ```
    */
  get rejectedGiftIdea(): Prisma.RejectedGiftIdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trait`: Exposes CRUD operations for the **Trait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traits
    * const traits = await prisma.trait.findMany()
    * ```
    */
  get trait(): Prisma.TraitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Person: 'Person',
    Gift: 'Gift',
    LoveCategory: 'LoveCategory',
    PersonLoveCategory: 'PersonLoveCategory',
    SpecialDay: 'SpecialDay',
    RejectedGiftIdea: 'RejectedGiftIdea',
    Trait: 'Trait'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "person" | "gift" | "loveCategory" | "personLoveCategory" | "specialDay" | "rejectedGiftIdea" | "trait"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Gift: {
        payload: Prisma.$GiftPayload<ExtArgs>
        fields: Prisma.GiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          findFirst: {
            args: Prisma.GiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          findMany: {
            args: Prisma.GiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          create: {
            args: Prisma.GiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          createMany: {
            args: Prisma.GiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          delete: {
            args: Prisma.GiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          update: {
            args: Prisma.GiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          deleteMany: {
            args: Prisma.GiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          upsert: {
            args: Prisma.GiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          aggregate: {
            args: Prisma.GiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGift>
          }
          groupBy: {
            args: Prisma.GiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftCountArgs<ExtArgs>
            result: $Utils.Optional<GiftCountAggregateOutputType> | number
          }
        }
      }
      LoveCategory: {
        payload: Prisma.$LoveCategoryPayload<ExtArgs>
        fields: Prisma.LoveCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoveCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoveCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>
          }
          findFirst: {
            args: Prisma.LoveCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoveCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>
          }
          findMany: {
            args: Prisma.LoveCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>[]
          }
          create: {
            args: Prisma.LoveCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>
          }
          createMany: {
            args: Prisma.LoveCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoveCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>[]
          }
          delete: {
            args: Prisma.LoveCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>
          }
          update: {
            args: Prisma.LoveCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>
          }
          deleteMany: {
            args: Prisma.LoveCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoveCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoveCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>[]
          }
          upsert: {
            args: Prisma.LoveCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCategoryPayload>
          }
          aggregate: {
            args: Prisma.LoveCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoveCategory>
          }
          groupBy: {
            args: Prisma.LoveCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoveCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoveCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<LoveCategoryCountAggregateOutputType> | number
          }
        }
      }
      PersonLoveCategory: {
        payload: Prisma.$PersonLoveCategoryPayload<ExtArgs>
        fields: Prisma.PersonLoveCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonLoveCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonLoveCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>
          }
          findFirst: {
            args: Prisma.PersonLoveCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonLoveCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>
          }
          findMany: {
            args: Prisma.PersonLoveCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>[]
          }
          create: {
            args: Prisma.PersonLoveCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>
          }
          createMany: {
            args: Prisma.PersonLoveCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonLoveCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>[]
          }
          delete: {
            args: Prisma.PersonLoveCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>
          }
          update: {
            args: Prisma.PersonLoveCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PersonLoveCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonLoveCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonLoveCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PersonLoveCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonLoveCategoryPayload>
          }
          aggregate: {
            args: Prisma.PersonLoveCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonLoveCategory>
          }
          groupBy: {
            args: Prisma.PersonLoveCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonLoveCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonLoveCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PersonLoveCategoryCountAggregateOutputType> | number
          }
        }
      }
      SpecialDay: {
        payload: Prisma.$SpecialDayPayload<ExtArgs>
        fields: Prisma.SpecialDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>
          }
          findFirst: {
            args: Prisma.SpecialDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>
          }
          findMany: {
            args: Prisma.SpecialDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>[]
          }
          create: {
            args: Prisma.SpecialDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>
          }
          createMany: {
            args: Prisma.SpecialDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>[]
          }
          delete: {
            args: Prisma.SpecialDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>
          }
          update: {
            args: Prisma.SpecialDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>
          }
          deleteMany: {
            args: Prisma.SpecialDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>[]
          }
          upsert: {
            args: Prisma.SpecialDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDayPayload>
          }
          aggregate: {
            args: Prisma.SpecialDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialDay>
          }
          groupBy: {
            args: Prisma.SpecialDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialDayCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialDayCountAggregateOutputType> | number
          }
        }
      }
      RejectedGiftIdea: {
        payload: Prisma.$RejectedGiftIdeaPayload<ExtArgs>
        fields: Prisma.RejectedGiftIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RejectedGiftIdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RejectedGiftIdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>
          }
          findFirst: {
            args: Prisma.RejectedGiftIdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RejectedGiftIdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>
          }
          findMany: {
            args: Prisma.RejectedGiftIdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>[]
          }
          create: {
            args: Prisma.RejectedGiftIdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>
          }
          createMany: {
            args: Prisma.RejectedGiftIdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RejectedGiftIdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>[]
          }
          delete: {
            args: Prisma.RejectedGiftIdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>
          }
          update: {
            args: Prisma.RejectedGiftIdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>
          }
          deleteMany: {
            args: Prisma.RejectedGiftIdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RejectedGiftIdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RejectedGiftIdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>[]
          }
          upsert: {
            args: Prisma.RejectedGiftIdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedGiftIdeaPayload>
          }
          aggregate: {
            args: Prisma.RejectedGiftIdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRejectedGiftIdea>
          }
          groupBy: {
            args: Prisma.RejectedGiftIdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RejectedGiftIdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RejectedGiftIdeaCountArgs<ExtArgs>
            result: $Utils.Optional<RejectedGiftIdeaCountAggregateOutputType> | number
          }
        }
      }
      Trait: {
        payload: Prisma.$TraitPayload<ExtArgs>
        fields: Prisma.TraitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          findFirst: {
            args: Prisma.TraitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          findMany: {
            args: Prisma.TraitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          create: {
            args: Prisma.TraitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          createMany: {
            args: Prisma.TraitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          delete: {
            args: Prisma.TraitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          update: {
            args: Prisma.TraitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          deleteMany: {
            args: Prisma.TraitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TraitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          upsert: {
            args: Prisma.TraitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          aggregate: {
            args: Prisma.TraitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrait>
          }
          groupBy: {
            args: Prisma.TraitGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraitGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraitCountArgs<ExtArgs>
            result: $Utils.Optional<TraitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    person?: PersonOmit
    gift?: GiftOmit
    loveCategory?: LoveCategoryOmit
    personLoveCategory?: PersonLoveCategoryOmit
    specialDay?: SpecialDayOmit
    rejectedGiftIdea?: RejectedGiftIdeaOmit
    trait?: TraitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    persons: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | UserCountOutputTypeCountPersonsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    loveTypes: number
    specialDays: number
    rejectedGiftIdeas: number
    traits: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loveTypes?: boolean | PersonCountOutputTypeCountLoveTypesArgs
    specialDays?: boolean | PersonCountOutputTypeCountSpecialDaysArgs
    rejectedGiftIdeas?: boolean | PersonCountOutputTypeCountRejectedGiftIdeasArgs
    traits?: boolean | PersonCountOutputTypeCountTraitsArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountLoveTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonLoveCategoryWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountSpecialDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialDayWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountRejectedGiftIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RejectedGiftIdeaWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountTraitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraitWhereInput
  }


  /**
   * Count Type LoveCategoryCountOutputType
   */

  export type LoveCategoryCountOutputType = {
    persons: number
  }

  export type LoveCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | LoveCategoryCountOutputTypeCountPersonsArgs
  }

  // Custom InputTypes
  /**
   * LoveCategoryCountOutputType without action
   */
  export type LoveCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategoryCountOutputType
     */
    select?: LoveCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoveCategoryCountOutputType without action
   */
  export type LoveCategoryCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonLoveCategoryWhereInput
  }


  /**
   * Count Type SpecialDayCountOutputType
   */

  export type SpecialDayCountOutputType = {
    gifts: number
  }

  export type SpecialDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts?: boolean | SpecialDayCountOutputTypeCountGiftsArgs
  }

  // Custom InputTypes
  /**
   * SpecialDayCountOutputType without action
   */
  export type SpecialDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDayCountOutputType
     */
    select?: SpecialDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialDayCountOutputType without action
   */
  export type SpecialDayCountOutputTypeCountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    persons?: boolean | User$personsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | User$personsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      persons: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persons<T extends User$personsArgs<ExtArgs> = {}>(args?: Subset<T, User$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.persons
   */
  export type User$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    relationship: string | null
    userId: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    relationship: string | null
    userId: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    relationship: number
    userId: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    relationship?: true
    userId?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    relationship?: true
    userId?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    relationship?: true
    userId?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    name: string
    relationship: string
    userId: string
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    relationship?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loveTypes?: boolean | Person$loveTypesArgs<ExtArgs>
    specialDays?: boolean | Person$specialDaysArgs<ExtArgs>
    rejectedGiftIdeas?: boolean | Person$rejectedGiftIdeasArgs<ExtArgs>
    traits?: boolean | Person$traitsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    relationship?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    relationship?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    name?: boolean
    relationship?: boolean
    userId?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "relationship" | "userId", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loveTypes?: boolean | Person$loveTypesArgs<ExtArgs>
    specialDays?: boolean | Person$specialDaysArgs<ExtArgs>
    rejectedGiftIdeas?: boolean | Person$rejectedGiftIdeasArgs<ExtArgs>
    traits?: boolean | Person$traitsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      loveTypes: Prisma.$PersonLoveCategoryPayload<ExtArgs>[]
      specialDays: Prisma.$SpecialDayPayload<ExtArgs>[]
      rejectedGiftIdeas: Prisma.$RejectedGiftIdeaPayload<ExtArgs>[]
      traits: Prisma.$TraitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      relationship: string
      userId: string
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loveTypes<T extends Person$loveTypesArgs<ExtArgs> = {}>(args?: Subset<T, Person$loveTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specialDays<T extends Person$specialDaysArgs<ExtArgs> = {}>(args?: Subset<T, Person$specialDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rejectedGiftIdeas<T extends Person$rejectedGiftIdeasArgs<ExtArgs> = {}>(args?: Subset<T, Person$rejectedGiftIdeasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    traits<T extends Person$traitsArgs<ExtArgs> = {}>(args?: Subset<T, Person$traitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
    readonly relationship: FieldRef<"Person", 'String'>
    readonly userId: FieldRef<"Person", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.loveTypes
   */
  export type Person$loveTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    where?: PersonLoveCategoryWhereInput
    orderBy?: PersonLoveCategoryOrderByWithRelationInput | PersonLoveCategoryOrderByWithRelationInput[]
    cursor?: PersonLoveCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonLoveCategoryScalarFieldEnum | PersonLoveCategoryScalarFieldEnum[]
  }

  /**
   * Person.specialDays
   */
  export type Person$specialDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    where?: SpecialDayWhereInput
    orderBy?: SpecialDayOrderByWithRelationInput | SpecialDayOrderByWithRelationInput[]
    cursor?: SpecialDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialDayScalarFieldEnum | SpecialDayScalarFieldEnum[]
  }

  /**
   * Person.rejectedGiftIdeas
   */
  export type Person$rejectedGiftIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    where?: RejectedGiftIdeaWhereInput
    orderBy?: RejectedGiftIdeaOrderByWithRelationInput | RejectedGiftIdeaOrderByWithRelationInput[]
    cursor?: RejectedGiftIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RejectedGiftIdeaScalarFieldEnum | RejectedGiftIdeaScalarFieldEnum[]
  }

  /**
   * Person.traits
   */
  export type Person$traitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    where?: TraitWhereInput
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    cursor?: TraitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Gift
   */

  export type AggregateGift = {
    _count: GiftCountAggregateOutputType | null
    _min: GiftMinAggregateOutputType | null
    _max: GiftMaxAggregateOutputType | null
  }

  export type GiftMinAggregateOutputType = {
    id: string | null
    title: string | null
    website: string | null
    done: boolean | null
    specialDayId: string | null
    createdAt: Date | null
  }

  export type GiftMaxAggregateOutputType = {
    id: string | null
    title: string | null
    website: string | null
    done: boolean | null
    specialDayId: string | null
    createdAt: Date | null
  }

  export type GiftCountAggregateOutputType = {
    id: number
    title: number
    website: number
    done: number
    specialDayId: number
    createdAt: number
    _all: number
  }


  export type GiftMinAggregateInputType = {
    id?: true
    title?: true
    website?: true
    done?: true
    specialDayId?: true
    createdAt?: true
  }

  export type GiftMaxAggregateInputType = {
    id?: true
    title?: true
    website?: true
    done?: true
    specialDayId?: true
    createdAt?: true
  }

  export type GiftCountAggregateInputType = {
    id?: true
    title?: true
    website?: true
    done?: true
    specialDayId?: true
    createdAt?: true
    _all?: true
  }

  export type GiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gift to aggregate.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gifts
    **/
    _count?: true | GiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftMaxAggregateInputType
  }

  export type GetGiftAggregateType<T extends GiftAggregateArgs> = {
        [P in keyof T & keyof AggregateGift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGift[P]>
      : GetScalarType<T[P], AggregateGift[P]>
  }




  export type GiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithAggregationInput | GiftOrderByWithAggregationInput[]
    by: GiftScalarFieldEnum[] | GiftScalarFieldEnum
    having?: GiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftCountAggregateInputType | true
    _min?: GiftMinAggregateInputType
    _max?: GiftMaxAggregateInputType
  }

  export type GiftGroupByOutputType = {
    id: string
    title: string
    website: string
    done: boolean
    specialDayId: string
    createdAt: Date
    _count: GiftCountAggregateOutputType | null
    _min: GiftMinAggregateOutputType | null
    _max: GiftMaxAggregateOutputType | null
  }

  type GetGiftGroupByPayload<T extends GiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftGroupByOutputType[P]>
            : GetScalarType<T[P], GiftGroupByOutputType[P]>
        }
      >
    >


  export type GiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    website?: boolean
    done?: boolean
    specialDayId?: boolean
    createdAt?: boolean
    specialDay?: boolean | SpecialDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    website?: boolean
    done?: boolean
    specialDayId?: boolean
    createdAt?: boolean
    specialDay?: boolean | SpecialDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    website?: boolean
    done?: boolean
    specialDayId?: boolean
    createdAt?: boolean
    specialDay?: boolean | SpecialDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectScalar = {
    id?: boolean
    title?: boolean
    website?: boolean
    done?: boolean
    specialDayId?: boolean
    createdAt?: boolean
  }

  export type GiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "website" | "done" | "specialDayId" | "createdAt", ExtArgs["result"]["gift"]>
  export type GiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialDay?: boolean | SpecialDayDefaultArgs<ExtArgs>
  }
  export type GiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialDay?: boolean | SpecialDayDefaultArgs<ExtArgs>
  }
  export type GiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialDay?: boolean | SpecialDayDefaultArgs<ExtArgs>
  }

  export type $GiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gift"
    objects: {
      specialDay: Prisma.$SpecialDayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      website: string
      done: boolean
      specialDayId: string
      createdAt: Date
    }, ExtArgs["result"]["gift"]>
    composites: {}
  }

  type GiftGetPayload<S extends boolean | null | undefined | GiftDefaultArgs> = $Result.GetResult<Prisma.$GiftPayload, S>

  type GiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiftCountAggregateInputType | true
    }

  export interface GiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gift'], meta: { name: 'Gift' } }
    /**
     * Find zero or one Gift that matches the filter.
     * @param {GiftFindUniqueArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiftFindUniqueArgs>(args: SelectSubset<T, GiftFindUniqueArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiftFindUniqueOrThrowArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiftFindUniqueOrThrowArgs>(args: SelectSubset<T, GiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindFirstArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiftFindFirstArgs>(args?: SelectSubset<T, GiftFindFirstArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindFirstOrThrowArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiftFindFirstOrThrowArgs>(args?: SelectSubset<T, GiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gifts
     * const gifts = await prisma.gift.findMany()
     * 
     * // Get first 10 Gifts
     * const gifts = await prisma.gift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giftWithIdOnly = await prisma.gift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GiftFindManyArgs>(args?: SelectSubset<T, GiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gift.
     * @param {GiftCreateArgs} args - Arguments to create a Gift.
     * @example
     * // Create one Gift
     * const Gift = await prisma.gift.create({
     *   data: {
     *     // ... data to create a Gift
     *   }
     * })
     * 
     */
    create<T extends GiftCreateArgs>(args: SelectSubset<T, GiftCreateArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gifts.
     * @param {GiftCreateManyArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gift = await prisma.gift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiftCreateManyArgs>(args?: SelectSubset<T, GiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gifts and returns the data saved in the database.
     * @param {GiftCreateManyAndReturnArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gift = await prisma.gift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gifts and only return the `id`
     * const giftWithIdOnly = await prisma.gift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GiftCreateManyAndReturnArgs>(args?: SelectSubset<T, GiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gift.
     * @param {GiftDeleteArgs} args - Arguments to delete one Gift.
     * @example
     * // Delete one Gift
     * const Gift = await prisma.gift.delete({
     *   where: {
     *     // ... filter to delete one Gift
     *   }
     * })
     * 
     */
    delete<T extends GiftDeleteArgs>(args: SelectSubset<T, GiftDeleteArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gift.
     * @param {GiftUpdateArgs} args - Arguments to update one Gift.
     * @example
     * // Update one Gift
     * const gift = await prisma.gift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiftUpdateArgs>(args: SelectSubset<T, GiftUpdateArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gifts.
     * @param {GiftDeleteManyArgs} args - Arguments to filter Gifts to delete.
     * @example
     * // Delete a few Gifts
     * const { count } = await prisma.gift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiftDeleteManyArgs>(args?: SelectSubset<T, GiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gifts
     * const gift = await prisma.gift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiftUpdateManyArgs>(args: SelectSubset<T, GiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts and returns the data updated in the database.
     * @param {GiftUpdateManyAndReturnArgs} args - Arguments to update many Gifts.
     * @example
     * // Update many Gifts
     * const gift = await prisma.gift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gifts and only return the `id`
     * const giftWithIdOnly = await prisma.gift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GiftUpdateManyAndReturnArgs>(args: SelectSubset<T, GiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gift.
     * @param {GiftUpsertArgs} args - Arguments to update or create a Gift.
     * @example
     * // Update or create a Gift
     * const gift = await prisma.gift.upsert({
     *   create: {
     *     // ... data to create a Gift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gift we want to update
     *   }
     * })
     */
    upsert<T extends GiftUpsertArgs>(args: SelectSubset<T, GiftUpsertArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftCountArgs} args - Arguments to filter Gifts to count.
     * @example
     * // Count the number of Gifts
     * const count = await prisma.gift.count({
     *   where: {
     *     // ... the filter for the Gifts we want to count
     *   }
     * })
    **/
    count<T extends GiftCountArgs>(
      args?: Subset<T, GiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiftAggregateArgs>(args: Subset<T, GiftAggregateArgs>): Prisma.PrismaPromise<GetGiftAggregateType<T>>

    /**
     * Group by Gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftGroupByArgs['orderBy'] }
        : { orderBy?: GiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gift model
   */
  readonly fields: GiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialDay<T extends SpecialDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialDayDefaultArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gift model
   */
  interface GiftFieldRefs {
    readonly id: FieldRef<"Gift", 'String'>
    readonly title: FieldRef<"Gift", 'String'>
    readonly website: FieldRef<"Gift", 'String'>
    readonly done: FieldRef<"Gift", 'Boolean'>
    readonly specialDayId: FieldRef<"Gift", 'String'>
    readonly createdAt: FieldRef<"Gift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gift findUnique
   */
  export type GiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift findUniqueOrThrow
   */
  export type GiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift findFirst
   */
  export type GiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gifts.
     */
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift findFirstOrThrow
   */
  export type GiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gifts.
     */
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift findMany
   */
  export type GiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gifts to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift create
   */
  export type GiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Gift.
     */
    data: XOR<GiftCreateInput, GiftUncheckedCreateInput>
  }

  /**
   * Gift createMany
   */
  export type GiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gifts.
     */
    data: GiftCreateManyInput | GiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gift createManyAndReturn
   */
  export type GiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * The data used to create many Gifts.
     */
    data: GiftCreateManyInput | GiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gift update
   */
  export type GiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Gift.
     */
    data: XOR<GiftUpdateInput, GiftUncheckedUpdateInput>
    /**
     * Choose, which Gift to update.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift updateMany
   */
  export type GiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gifts.
     */
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyInput>
    /**
     * Filter which Gifts to update
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to update.
     */
    limit?: number
  }

  /**
   * Gift updateManyAndReturn
   */
  export type GiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * The data used to update Gifts.
     */
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyInput>
    /**
     * Filter which Gifts to update
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gift upsert
   */
  export type GiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Gift to update in case it exists.
     */
    where: GiftWhereUniqueInput
    /**
     * In case the Gift found by the `where` argument doesn't exist, create a new Gift with this data.
     */
    create: XOR<GiftCreateInput, GiftUncheckedCreateInput>
    /**
     * In case the Gift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftUpdateInput, GiftUncheckedUpdateInput>
  }

  /**
   * Gift delete
   */
  export type GiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter which Gift to delete.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift deleteMany
   */
  export type GiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gifts to delete
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to delete.
     */
    limit?: number
  }

  /**
   * Gift without action
   */
  export type GiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
  }


  /**
   * Model LoveCategory
   */

  export type AggregateLoveCategory = {
    _count: LoveCategoryCountAggregateOutputType | null
    _min: LoveCategoryMinAggregateOutputType | null
    _max: LoveCategoryMaxAggregateOutputType | null
  }

  export type LoveCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    catalyst: string | null
    description: string | null
  }

  export type LoveCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    catalyst: string | null
    description: string | null
  }

  export type LoveCategoryCountAggregateOutputType = {
    id: number
    name: number
    catalyst: number
    description: number
    _all: number
  }


  export type LoveCategoryMinAggregateInputType = {
    id?: true
    name?: true
    catalyst?: true
    description?: true
  }

  export type LoveCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    catalyst?: true
    description?: true
  }

  export type LoveCategoryCountAggregateInputType = {
    id?: true
    name?: true
    catalyst?: true
    description?: true
    _all?: true
  }

  export type LoveCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoveCategory to aggregate.
     */
    where?: LoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCategories to fetch.
     */
    orderBy?: LoveCategoryOrderByWithRelationInput | LoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoveCategories
    **/
    _count?: true | LoveCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoveCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoveCategoryMaxAggregateInputType
  }

  export type GetLoveCategoryAggregateType<T extends LoveCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLoveCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoveCategory[P]>
      : GetScalarType<T[P], AggregateLoveCategory[P]>
  }




  export type LoveCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoveCategoryWhereInput
    orderBy?: LoveCategoryOrderByWithAggregationInput | LoveCategoryOrderByWithAggregationInput[]
    by: LoveCategoryScalarFieldEnum[] | LoveCategoryScalarFieldEnum
    having?: LoveCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoveCategoryCountAggregateInputType | true
    _min?: LoveCategoryMinAggregateInputType
    _max?: LoveCategoryMaxAggregateInputType
  }

  export type LoveCategoryGroupByOutputType = {
    id: string
    name: string
    catalyst: string
    description: string
    _count: LoveCategoryCountAggregateOutputType | null
    _min: LoveCategoryMinAggregateOutputType | null
    _max: LoveCategoryMaxAggregateOutputType | null
  }

  type GetLoveCategoryGroupByPayload<T extends LoveCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoveCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoveCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoveCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], LoveCategoryGroupByOutputType[P]>
        }
      >
    >


  export type LoveCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    catalyst?: boolean
    description?: boolean
    persons?: boolean | LoveCategory$personsArgs<ExtArgs>
    _count?: boolean | LoveCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loveCategory"]>

  export type LoveCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    catalyst?: boolean
    description?: boolean
  }, ExtArgs["result"]["loveCategory"]>

  export type LoveCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    catalyst?: boolean
    description?: boolean
  }, ExtArgs["result"]["loveCategory"]>

  export type LoveCategorySelectScalar = {
    id?: boolean
    name?: boolean
    catalyst?: boolean
    description?: boolean
  }

  export type LoveCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "catalyst" | "description", ExtArgs["result"]["loveCategory"]>
  export type LoveCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | LoveCategory$personsArgs<ExtArgs>
    _count?: boolean | LoveCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoveCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LoveCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LoveCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoveCategory"
    objects: {
      persons: Prisma.$PersonLoveCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      catalyst: string
      description: string
    }, ExtArgs["result"]["loveCategory"]>
    composites: {}
  }

  type LoveCategoryGetPayload<S extends boolean | null | undefined | LoveCategoryDefaultArgs> = $Result.GetResult<Prisma.$LoveCategoryPayload, S>

  type LoveCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoveCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoveCategoryCountAggregateInputType | true
    }

  export interface LoveCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoveCategory'], meta: { name: 'LoveCategory' } }
    /**
     * Find zero or one LoveCategory that matches the filter.
     * @param {LoveCategoryFindUniqueArgs} args - Arguments to find a LoveCategory
     * @example
     * // Get one LoveCategory
     * const loveCategory = await prisma.loveCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoveCategoryFindUniqueArgs>(args: SelectSubset<T, LoveCategoryFindUniqueArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoveCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoveCategoryFindUniqueOrThrowArgs} args - Arguments to find a LoveCategory
     * @example
     * // Get one LoveCategory
     * const loveCategory = await prisma.loveCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoveCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LoveCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoveCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCategoryFindFirstArgs} args - Arguments to find a LoveCategory
     * @example
     * // Get one LoveCategory
     * const loveCategory = await prisma.loveCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoveCategoryFindFirstArgs>(args?: SelectSubset<T, LoveCategoryFindFirstArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoveCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCategoryFindFirstOrThrowArgs} args - Arguments to find a LoveCategory
     * @example
     * // Get one LoveCategory
     * const loveCategory = await prisma.loveCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoveCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LoveCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoveCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoveCategories
     * const loveCategories = await prisma.loveCategory.findMany()
     * 
     * // Get first 10 LoveCategories
     * const loveCategories = await prisma.loveCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loveCategoryWithIdOnly = await prisma.loveCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoveCategoryFindManyArgs>(args?: SelectSubset<T, LoveCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoveCategory.
     * @param {LoveCategoryCreateArgs} args - Arguments to create a LoveCategory.
     * @example
     * // Create one LoveCategory
     * const LoveCategory = await prisma.loveCategory.create({
     *   data: {
     *     // ... data to create a LoveCategory
     *   }
     * })
     * 
     */
    create<T extends LoveCategoryCreateArgs>(args: SelectSubset<T, LoveCategoryCreateArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoveCategories.
     * @param {LoveCategoryCreateManyArgs} args - Arguments to create many LoveCategories.
     * @example
     * // Create many LoveCategories
     * const loveCategory = await prisma.loveCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoveCategoryCreateManyArgs>(args?: SelectSubset<T, LoveCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoveCategories and returns the data saved in the database.
     * @param {LoveCategoryCreateManyAndReturnArgs} args - Arguments to create many LoveCategories.
     * @example
     * // Create many LoveCategories
     * const loveCategory = await prisma.loveCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoveCategories and only return the `id`
     * const loveCategoryWithIdOnly = await prisma.loveCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoveCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LoveCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoveCategory.
     * @param {LoveCategoryDeleteArgs} args - Arguments to delete one LoveCategory.
     * @example
     * // Delete one LoveCategory
     * const LoveCategory = await prisma.loveCategory.delete({
     *   where: {
     *     // ... filter to delete one LoveCategory
     *   }
     * })
     * 
     */
    delete<T extends LoveCategoryDeleteArgs>(args: SelectSubset<T, LoveCategoryDeleteArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoveCategory.
     * @param {LoveCategoryUpdateArgs} args - Arguments to update one LoveCategory.
     * @example
     * // Update one LoveCategory
     * const loveCategory = await prisma.loveCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoveCategoryUpdateArgs>(args: SelectSubset<T, LoveCategoryUpdateArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoveCategories.
     * @param {LoveCategoryDeleteManyArgs} args - Arguments to filter LoveCategories to delete.
     * @example
     * // Delete a few LoveCategories
     * const { count } = await prisma.loveCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoveCategoryDeleteManyArgs>(args?: SelectSubset<T, LoveCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoveCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoveCategories
     * const loveCategory = await prisma.loveCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoveCategoryUpdateManyArgs>(args: SelectSubset<T, LoveCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoveCategories and returns the data updated in the database.
     * @param {LoveCategoryUpdateManyAndReturnArgs} args - Arguments to update many LoveCategories.
     * @example
     * // Update many LoveCategories
     * const loveCategory = await prisma.loveCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoveCategories and only return the `id`
     * const loveCategoryWithIdOnly = await prisma.loveCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoveCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LoveCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoveCategory.
     * @param {LoveCategoryUpsertArgs} args - Arguments to update or create a LoveCategory.
     * @example
     * // Update or create a LoveCategory
     * const loveCategory = await prisma.loveCategory.upsert({
     *   create: {
     *     // ... data to create a LoveCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoveCategory we want to update
     *   }
     * })
     */
    upsert<T extends LoveCategoryUpsertArgs>(args: SelectSubset<T, LoveCategoryUpsertArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoveCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCategoryCountArgs} args - Arguments to filter LoveCategories to count.
     * @example
     * // Count the number of LoveCategories
     * const count = await prisma.loveCategory.count({
     *   where: {
     *     // ... the filter for the LoveCategories we want to count
     *   }
     * })
    **/
    count<T extends LoveCategoryCountArgs>(
      args?: Subset<T, LoveCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoveCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoveCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoveCategoryAggregateArgs>(args: Subset<T, LoveCategoryAggregateArgs>): Prisma.PrismaPromise<GetLoveCategoryAggregateType<T>>

    /**
     * Group by LoveCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoveCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoveCategoryGroupByArgs['orderBy'] }
        : { orderBy?: LoveCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoveCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoveCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoveCategory model
   */
  readonly fields: LoveCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoveCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoveCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persons<T extends LoveCategory$personsArgs<ExtArgs> = {}>(args?: Subset<T, LoveCategory$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoveCategory model
   */
  interface LoveCategoryFieldRefs {
    readonly id: FieldRef<"LoveCategory", 'String'>
    readonly name: FieldRef<"LoveCategory", 'String'>
    readonly catalyst: FieldRef<"LoveCategory", 'String'>
    readonly description: FieldRef<"LoveCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LoveCategory findUnique
   */
  export type LoveCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoveCategory to fetch.
     */
    where: LoveCategoryWhereUniqueInput
  }

  /**
   * LoveCategory findUniqueOrThrow
   */
  export type LoveCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoveCategory to fetch.
     */
    where: LoveCategoryWhereUniqueInput
  }

  /**
   * LoveCategory findFirst
   */
  export type LoveCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoveCategory to fetch.
     */
    where?: LoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCategories to fetch.
     */
    orderBy?: LoveCategoryOrderByWithRelationInput | LoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoveCategories.
     */
    cursor?: LoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoveCategories.
     */
    distinct?: LoveCategoryScalarFieldEnum | LoveCategoryScalarFieldEnum[]
  }

  /**
   * LoveCategory findFirstOrThrow
   */
  export type LoveCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoveCategory to fetch.
     */
    where?: LoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCategories to fetch.
     */
    orderBy?: LoveCategoryOrderByWithRelationInput | LoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoveCategories.
     */
    cursor?: LoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoveCategories.
     */
    distinct?: LoveCategoryScalarFieldEnum | LoveCategoryScalarFieldEnum[]
  }

  /**
   * LoveCategory findMany
   */
  export type LoveCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoveCategories to fetch.
     */
    where?: LoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCategories to fetch.
     */
    orderBy?: LoveCategoryOrderByWithRelationInput | LoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoveCategories.
     */
    cursor?: LoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCategories.
     */
    skip?: number
    distinct?: LoveCategoryScalarFieldEnum | LoveCategoryScalarFieldEnum[]
  }

  /**
   * LoveCategory create
   */
  export type LoveCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LoveCategory.
     */
    data: XOR<LoveCategoryCreateInput, LoveCategoryUncheckedCreateInput>
  }

  /**
   * LoveCategory createMany
   */
  export type LoveCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoveCategories.
     */
    data: LoveCategoryCreateManyInput | LoveCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoveCategory createManyAndReturn
   */
  export type LoveCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many LoveCategories.
     */
    data: LoveCategoryCreateManyInput | LoveCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoveCategory update
   */
  export type LoveCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LoveCategory.
     */
    data: XOR<LoveCategoryUpdateInput, LoveCategoryUncheckedUpdateInput>
    /**
     * Choose, which LoveCategory to update.
     */
    where: LoveCategoryWhereUniqueInput
  }

  /**
   * LoveCategory updateMany
   */
  export type LoveCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoveCategories.
     */
    data: XOR<LoveCategoryUpdateManyMutationInput, LoveCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LoveCategories to update
     */
    where?: LoveCategoryWhereInput
    /**
     * Limit how many LoveCategories to update.
     */
    limit?: number
  }

  /**
   * LoveCategory updateManyAndReturn
   */
  export type LoveCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * The data used to update LoveCategories.
     */
    data: XOR<LoveCategoryUpdateManyMutationInput, LoveCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LoveCategories to update
     */
    where?: LoveCategoryWhereInput
    /**
     * Limit how many LoveCategories to update.
     */
    limit?: number
  }

  /**
   * LoveCategory upsert
   */
  export type LoveCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LoveCategory to update in case it exists.
     */
    where: LoveCategoryWhereUniqueInput
    /**
     * In case the LoveCategory found by the `where` argument doesn't exist, create a new LoveCategory with this data.
     */
    create: XOR<LoveCategoryCreateInput, LoveCategoryUncheckedCreateInput>
    /**
     * In case the LoveCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoveCategoryUpdateInput, LoveCategoryUncheckedUpdateInput>
  }

  /**
   * LoveCategory delete
   */
  export type LoveCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
    /**
     * Filter which LoveCategory to delete.
     */
    where: LoveCategoryWhereUniqueInput
  }

  /**
   * LoveCategory deleteMany
   */
  export type LoveCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoveCategories to delete
     */
    where?: LoveCategoryWhereInput
    /**
     * Limit how many LoveCategories to delete.
     */
    limit?: number
  }

  /**
   * LoveCategory.persons
   */
  export type LoveCategory$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    where?: PersonLoveCategoryWhereInput
    orderBy?: PersonLoveCategoryOrderByWithRelationInput | PersonLoveCategoryOrderByWithRelationInput[]
    cursor?: PersonLoveCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonLoveCategoryScalarFieldEnum | PersonLoveCategoryScalarFieldEnum[]
  }

  /**
   * LoveCategory without action
   */
  export type LoveCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCategory
     */
    select?: LoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCategory
     */
    omit?: LoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCategoryInclude<ExtArgs> | null
  }


  /**
   * Model PersonLoveCategory
   */

  export type AggregatePersonLoveCategory = {
    _count: PersonLoveCategoryCountAggregateOutputType | null
    _min: PersonLoveCategoryMinAggregateOutputType | null
    _max: PersonLoveCategoryMaxAggregateOutputType | null
  }

  export type PersonLoveCategoryMinAggregateOutputType = {
    id: string | null
    personId: string | null
    loveCategoryId: string | null
    note: string | null
  }

  export type PersonLoveCategoryMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    loveCategoryId: string | null
    note: string | null
  }

  export type PersonLoveCategoryCountAggregateOutputType = {
    id: number
    personId: number
    loveCategoryId: number
    note: number
    _all: number
  }


  export type PersonLoveCategoryMinAggregateInputType = {
    id?: true
    personId?: true
    loveCategoryId?: true
    note?: true
  }

  export type PersonLoveCategoryMaxAggregateInputType = {
    id?: true
    personId?: true
    loveCategoryId?: true
    note?: true
  }

  export type PersonLoveCategoryCountAggregateInputType = {
    id?: true
    personId?: true
    loveCategoryId?: true
    note?: true
    _all?: true
  }

  export type PersonLoveCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonLoveCategory to aggregate.
     */
    where?: PersonLoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonLoveCategories to fetch.
     */
    orderBy?: PersonLoveCategoryOrderByWithRelationInput | PersonLoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonLoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonLoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonLoveCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonLoveCategories
    **/
    _count?: true | PersonLoveCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonLoveCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonLoveCategoryMaxAggregateInputType
  }

  export type GetPersonLoveCategoryAggregateType<T extends PersonLoveCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonLoveCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonLoveCategory[P]>
      : GetScalarType<T[P], AggregatePersonLoveCategory[P]>
  }




  export type PersonLoveCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonLoveCategoryWhereInput
    orderBy?: PersonLoveCategoryOrderByWithAggregationInput | PersonLoveCategoryOrderByWithAggregationInput[]
    by: PersonLoveCategoryScalarFieldEnum[] | PersonLoveCategoryScalarFieldEnum
    having?: PersonLoveCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonLoveCategoryCountAggregateInputType | true
    _min?: PersonLoveCategoryMinAggregateInputType
    _max?: PersonLoveCategoryMaxAggregateInputType
  }

  export type PersonLoveCategoryGroupByOutputType = {
    id: string
    personId: string
    loveCategoryId: string
    note: string | null
    _count: PersonLoveCategoryCountAggregateOutputType | null
    _min: PersonLoveCategoryMinAggregateOutputType | null
    _max: PersonLoveCategoryMaxAggregateOutputType | null
  }

  type GetPersonLoveCategoryGroupByPayload<T extends PersonLoveCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonLoveCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonLoveCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonLoveCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PersonLoveCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PersonLoveCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    loveCategoryId?: boolean
    note?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    loveCategory?: boolean | LoveCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personLoveCategory"]>

  export type PersonLoveCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    loveCategoryId?: boolean
    note?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    loveCategory?: boolean | LoveCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personLoveCategory"]>

  export type PersonLoveCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    loveCategoryId?: boolean
    note?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    loveCategory?: boolean | LoveCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personLoveCategory"]>

  export type PersonLoveCategorySelectScalar = {
    id?: boolean
    personId?: boolean
    loveCategoryId?: boolean
    note?: boolean
  }

  export type PersonLoveCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "loveCategoryId" | "note", ExtArgs["result"]["personLoveCategory"]>
  export type PersonLoveCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    loveCategory?: boolean | LoveCategoryDefaultArgs<ExtArgs>
  }
  export type PersonLoveCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    loveCategory?: boolean | LoveCategoryDefaultArgs<ExtArgs>
  }
  export type PersonLoveCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    loveCategory?: boolean | LoveCategoryDefaultArgs<ExtArgs>
  }

  export type $PersonLoveCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonLoveCategory"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      loveCategory: Prisma.$LoveCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      loveCategoryId: string
      note: string | null
    }, ExtArgs["result"]["personLoveCategory"]>
    composites: {}
  }

  type PersonLoveCategoryGetPayload<S extends boolean | null | undefined | PersonLoveCategoryDefaultArgs> = $Result.GetResult<Prisma.$PersonLoveCategoryPayload, S>

  type PersonLoveCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonLoveCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonLoveCategoryCountAggregateInputType | true
    }

  export interface PersonLoveCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonLoveCategory'], meta: { name: 'PersonLoveCategory' } }
    /**
     * Find zero or one PersonLoveCategory that matches the filter.
     * @param {PersonLoveCategoryFindUniqueArgs} args - Arguments to find a PersonLoveCategory
     * @example
     * // Get one PersonLoveCategory
     * const personLoveCategory = await prisma.personLoveCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonLoveCategoryFindUniqueArgs>(args: SelectSubset<T, PersonLoveCategoryFindUniqueArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonLoveCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonLoveCategoryFindUniqueOrThrowArgs} args - Arguments to find a PersonLoveCategory
     * @example
     * // Get one PersonLoveCategory
     * const personLoveCategory = await prisma.personLoveCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonLoveCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonLoveCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonLoveCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonLoveCategoryFindFirstArgs} args - Arguments to find a PersonLoveCategory
     * @example
     * // Get one PersonLoveCategory
     * const personLoveCategory = await prisma.personLoveCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonLoveCategoryFindFirstArgs>(args?: SelectSubset<T, PersonLoveCategoryFindFirstArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonLoveCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonLoveCategoryFindFirstOrThrowArgs} args - Arguments to find a PersonLoveCategory
     * @example
     * // Get one PersonLoveCategory
     * const personLoveCategory = await prisma.personLoveCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonLoveCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonLoveCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonLoveCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonLoveCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonLoveCategories
     * const personLoveCategories = await prisma.personLoveCategory.findMany()
     * 
     * // Get first 10 PersonLoveCategories
     * const personLoveCategories = await prisma.personLoveCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personLoveCategoryWithIdOnly = await prisma.personLoveCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonLoveCategoryFindManyArgs>(args?: SelectSubset<T, PersonLoveCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonLoveCategory.
     * @param {PersonLoveCategoryCreateArgs} args - Arguments to create a PersonLoveCategory.
     * @example
     * // Create one PersonLoveCategory
     * const PersonLoveCategory = await prisma.personLoveCategory.create({
     *   data: {
     *     // ... data to create a PersonLoveCategory
     *   }
     * })
     * 
     */
    create<T extends PersonLoveCategoryCreateArgs>(args: SelectSubset<T, PersonLoveCategoryCreateArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonLoveCategories.
     * @param {PersonLoveCategoryCreateManyArgs} args - Arguments to create many PersonLoveCategories.
     * @example
     * // Create many PersonLoveCategories
     * const personLoveCategory = await prisma.personLoveCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonLoveCategoryCreateManyArgs>(args?: SelectSubset<T, PersonLoveCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonLoveCategories and returns the data saved in the database.
     * @param {PersonLoveCategoryCreateManyAndReturnArgs} args - Arguments to create many PersonLoveCategories.
     * @example
     * // Create many PersonLoveCategories
     * const personLoveCategory = await prisma.personLoveCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonLoveCategories and only return the `id`
     * const personLoveCategoryWithIdOnly = await prisma.personLoveCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonLoveCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonLoveCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonLoveCategory.
     * @param {PersonLoveCategoryDeleteArgs} args - Arguments to delete one PersonLoveCategory.
     * @example
     * // Delete one PersonLoveCategory
     * const PersonLoveCategory = await prisma.personLoveCategory.delete({
     *   where: {
     *     // ... filter to delete one PersonLoveCategory
     *   }
     * })
     * 
     */
    delete<T extends PersonLoveCategoryDeleteArgs>(args: SelectSubset<T, PersonLoveCategoryDeleteArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonLoveCategory.
     * @param {PersonLoveCategoryUpdateArgs} args - Arguments to update one PersonLoveCategory.
     * @example
     * // Update one PersonLoveCategory
     * const personLoveCategory = await prisma.personLoveCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonLoveCategoryUpdateArgs>(args: SelectSubset<T, PersonLoveCategoryUpdateArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonLoveCategories.
     * @param {PersonLoveCategoryDeleteManyArgs} args - Arguments to filter PersonLoveCategories to delete.
     * @example
     * // Delete a few PersonLoveCategories
     * const { count } = await prisma.personLoveCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonLoveCategoryDeleteManyArgs>(args?: SelectSubset<T, PersonLoveCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonLoveCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonLoveCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonLoveCategories
     * const personLoveCategory = await prisma.personLoveCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonLoveCategoryUpdateManyArgs>(args: SelectSubset<T, PersonLoveCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonLoveCategories and returns the data updated in the database.
     * @param {PersonLoveCategoryUpdateManyAndReturnArgs} args - Arguments to update many PersonLoveCategories.
     * @example
     * // Update many PersonLoveCategories
     * const personLoveCategory = await prisma.personLoveCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonLoveCategories and only return the `id`
     * const personLoveCategoryWithIdOnly = await prisma.personLoveCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonLoveCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonLoveCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonLoveCategory.
     * @param {PersonLoveCategoryUpsertArgs} args - Arguments to update or create a PersonLoveCategory.
     * @example
     * // Update or create a PersonLoveCategory
     * const personLoveCategory = await prisma.personLoveCategory.upsert({
     *   create: {
     *     // ... data to create a PersonLoveCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonLoveCategory we want to update
     *   }
     * })
     */
    upsert<T extends PersonLoveCategoryUpsertArgs>(args: SelectSubset<T, PersonLoveCategoryUpsertArgs<ExtArgs>>): Prisma__PersonLoveCategoryClient<$Result.GetResult<Prisma.$PersonLoveCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonLoveCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonLoveCategoryCountArgs} args - Arguments to filter PersonLoveCategories to count.
     * @example
     * // Count the number of PersonLoveCategories
     * const count = await prisma.personLoveCategory.count({
     *   where: {
     *     // ... the filter for the PersonLoveCategories we want to count
     *   }
     * })
    **/
    count<T extends PersonLoveCategoryCountArgs>(
      args?: Subset<T, PersonLoveCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonLoveCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonLoveCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonLoveCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonLoveCategoryAggregateArgs>(args: Subset<T, PersonLoveCategoryAggregateArgs>): Prisma.PrismaPromise<GetPersonLoveCategoryAggregateType<T>>

    /**
     * Group by PersonLoveCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonLoveCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonLoveCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonLoveCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PersonLoveCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonLoveCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonLoveCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonLoveCategory model
   */
  readonly fields: PersonLoveCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonLoveCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonLoveCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loveCategory<T extends LoveCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoveCategoryDefaultArgs<ExtArgs>>): Prisma__LoveCategoryClient<$Result.GetResult<Prisma.$LoveCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonLoveCategory model
   */
  interface PersonLoveCategoryFieldRefs {
    readonly id: FieldRef<"PersonLoveCategory", 'String'>
    readonly personId: FieldRef<"PersonLoveCategory", 'String'>
    readonly loveCategoryId: FieldRef<"PersonLoveCategory", 'String'>
    readonly note: FieldRef<"PersonLoveCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonLoveCategory findUnique
   */
  export type PersonLoveCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PersonLoveCategory to fetch.
     */
    where: PersonLoveCategoryWhereUniqueInput
  }

  /**
   * PersonLoveCategory findUniqueOrThrow
   */
  export type PersonLoveCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PersonLoveCategory to fetch.
     */
    where: PersonLoveCategoryWhereUniqueInput
  }

  /**
   * PersonLoveCategory findFirst
   */
  export type PersonLoveCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PersonLoveCategory to fetch.
     */
    where?: PersonLoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonLoveCategories to fetch.
     */
    orderBy?: PersonLoveCategoryOrderByWithRelationInput | PersonLoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonLoveCategories.
     */
    cursor?: PersonLoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonLoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonLoveCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonLoveCategories.
     */
    distinct?: PersonLoveCategoryScalarFieldEnum | PersonLoveCategoryScalarFieldEnum[]
  }

  /**
   * PersonLoveCategory findFirstOrThrow
   */
  export type PersonLoveCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PersonLoveCategory to fetch.
     */
    where?: PersonLoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonLoveCategories to fetch.
     */
    orderBy?: PersonLoveCategoryOrderByWithRelationInput | PersonLoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonLoveCategories.
     */
    cursor?: PersonLoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonLoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonLoveCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonLoveCategories.
     */
    distinct?: PersonLoveCategoryScalarFieldEnum | PersonLoveCategoryScalarFieldEnum[]
  }

  /**
   * PersonLoveCategory findMany
   */
  export type PersonLoveCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PersonLoveCategories to fetch.
     */
    where?: PersonLoveCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonLoveCategories to fetch.
     */
    orderBy?: PersonLoveCategoryOrderByWithRelationInput | PersonLoveCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonLoveCategories.
     */
    cursor?: PersonLoveCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonLoveCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonLoveCategories.
     */
    skip?: number
    distinct?: PersonLoveCategoryScalarFieldEnum | PersonLoveCategoryScalarFieldEnum[]
  }

  /**
   * PersonLoveCategory create
   */
  export type PersonLoveCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonLoveCategory.
     */
    data: XOR<PersonLoveCategoryCreateInput, PersonLoveCategoryUncheckedCreateInput>
  }

  /**
   * PersonLoveCategory createMany
   */
  export type PersonLoveCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonLoveCategories.
     */
    data: PersonLoveCategoryCreateManyInput | PersonLoveCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonLoveCategory createManyAndReturn
   */
  export type PersonLoveCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PersonLoveCategories.
     */
    data: PersonLoveCategoryCreateManyInput | PersonLoveCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonLoveCategory update
   */
  export type PersonLoveCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonLoveCategory.
     */
    data: XOR<PersonLoveCategoryUpdateInput, PersonLoveCategoryUncheckedUpdateInput>
    /**
     * Choose, which PersonLoveCategory to update.
     */
    where: PersonLoveCategoryWhereUniqueInput
  }

  /**
   * PersonLoveCategory updateMany
   */
  export type PersonLoveCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonLoveCategories.
     */
    data: XOR<PersonLoveCategoryUpdateManyMutationInput, PersonLoveCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PersonLoveCategories to update
     */
    where?: PersonLoveCategoryWhereInput
    /**
     * Limit how many PersonLoveCategories to update.
     */
    limit?: number
  }

  /**
   * PersonLoveCategory updateManyAndReturn
   */
  export type PersonLoveCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PersonLoveCategories.
     */
    data: XOR<PersonLoveCategoryUpdateManyMutationInput, PersonLoveCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PersonLoveCategories to update
     */
    where?: PersonLoveCategoryWhereInput
    /**
     * Limit how many PersonLoveCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonLoveCategory upsert
   */
  export type PersonLoveCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonLoveCategory to update in case it exists.
     */
    where: PersonLoveCategoryWhereUniqueInput
    /**
     * In case the PersonLoveCategory found by the `where` argument doesn't exist, create a new PersonLoveCategory with this data.
     */
    create: XOR<PersonLoveCategoryCreateInput, PersonLoveCategoryUncheckedCreateInput>
    /**
     * In case the PersonLoveCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonLoveCategoryUpdateInput, PersonLoveCategoryUncheckedUpdateInput>
  }

  /**
   * PersonLoveCategory delete
   */
  export type PersonLoveCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
    /**
     * Filter which PersonLoveCategory to delete.
     */
    where: PersonLoveCategoryWhereUniqueInput
  }

  /**
   * PersonLoveCategory deleteMany
   */
  export type PersonLoveCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonLoveCategories to delete
     */
    where?: PersonLoveCategoryWhereInput
    /**
     * Limit how many PersonLoveCategories to delete.
     */
    limit?: number
  }

  /**
   * PersonLoveCategory without action
   */
  export type PersonLoveCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonLoveCategory
     */
    select?: PersonLoveCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonLoveCategory
     */
    omit?: PersonLoveCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonLoveCategoryInclude<ExtArgs> | null
  }


  /**
   * Model SpecialDay
   */

  export type AggregateSpecialDay = {
    _count: SpecialDayCountAggregateOutputType | null
    _min: SpecialDayMinAggregateOutputType | null
    _max: SpecialDayMaxAggregateOutputType | null
  }

  export type SpecialDayMinAggregateOutputType = {
    id: string | null
    personId: string | null
    title: string | null
    date: Date | null
  }

  export type SpecialDayMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    title: string | null
    date: Date | null
  }

  export type SpecialDayCountAggregateOutputType = {
    id: number
    personId: number
    title: number
    date: number
    _all: number
  }


  export type SpecialDayMinAggregateInputType = {
    id?: true
    personId?: true
    title?: true
    date?: true
  }

  export type SpecialDayMaxAggregateInputType = {
    id?: true
    personId?: true
    title?: true
    date?: true
  }

  export type SpecialDayCountAggregateInputType = {
    id?: true
    personId?: true
    title?: true
    date?: true
    _all?: true
  }

  export type SpecialDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialDay to aggregate.
     */
    where?: SpecialDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDays to fetch.
     */
    orderBy?: SpecialDayOrderByWithRelationInput | SpecialDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialDays
    **/
    _count?: true | SpecialDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialDayMaxAggregateInputType
  }

  export type GetSpecialDayAggregateType<T extends SpecialDayAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialDay[P]>
      : GetScalarType<T[P], AggregateSpecialDay[P]>
  }




  export type SpecialDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialDayWhereInput
    orderBy?: SpecialDayOrderByWithAggregationInput | SpecialDayOrderByWithAggregationInput[]
    by: SpecialDayScalarFieldEnum[] | SpecialDayScalarFieldEnum
    having?: SpecialDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialDayCountAggregateInputType | true
    _min?: SpecialDayMinAggregateInputType
    _max?: SpecialDayMaxAggregateInputType
  }

  export type SpecialDayGroupByOutputType = {
    id: string
    personId: string
    title: string
    date: Date
    _count: SpecialDayCountAggregateOutputType | null
    _min: SpecialDayMinAggregateOutputType | null
    _max: SpecialDayMaxAggregateOutputType | null
  }

  type GetSpecialDayGroupByPayload<T extends SpecialDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialDayGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialDayGroupByOutputType[P]>
        }
      >
    >


  export type SpecialDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    title?: boolean
    date?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    gifts?: boolean | SpecialDay$giftsArgs<ExtArgs>
    _count?: boolean | SpecialDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialDay"]>

  export type SpecialDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    title?: boolean
    date?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialDay"]>

  export type SpecialDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    title?: boolean
    date?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialDay"]>

  export type SpecialDaySelectScalar = {
    id?: boolean
    personId?: boolean
    title?: boolean
    date?: boolean
  }

  export type SpecialDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "title" | "date", ExtArgs["result"]["specialDay"]>
  export type SpecialDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    gifts?: boolean | SpecialDay$giftsArgs<ExtArgs>
    _count?: boolean | SpecialDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type SpecialDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $SpecialDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialDay"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      gifts: Prisma.$GiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      title: string
      date: Date
    }, ExtArgs["result"]["specialDay"]>
    composites: {}
  }

  type SpecialDayGetPayload<S extends boolean | null | undefined | SpecialDayDefaultArgs> = $Result.GetResult<Prisma.$SpecialDayPayload, S>

  type SpecialDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialDayCountAggregateInputType | true
    }

  export interface SpecialDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialDay'], meta: { name: 'SpecialDay' } }
    /**
     * Find zero or one SpecialDay that matches the filter.
     * @param {SpecialDayFindUniqueArgs} args - Arguments to find a SpecialDay
     * @example
     * // Get one SpecialDay
     * const specialDay = await prisma.specialDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialDayFindUniqueArgs>(args: SelectSubset<T, SpecialDayFindUniqueArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialDayFindUniqueOrThrowArgs} args - Arguments to find a SpecialDay
     * @example
     * // Get one SpecialDay
     * const specialDay = await prisma.specialDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialDayFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDayFindFirstArgs} args - Arguments to find a SpecialDay
     * @example
     * // Get one SpecialDay
     * const specialDay = await prisma.specialDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialDayFindFirstArgs>(args?: SelectSubset<T, SpecialDayFindFirstArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDayFindFirstOrThrowArgs} args - Arguments to find a SpecialDay
     * @example
     * // Get one SpecialDay
     * const specialDay = await prisma.specialDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialDayFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialDays
     * const specialDays = await prisma.specialDay.findMany()
     * 
     * // Get first 10 SpecialDays
     * const specialDays = await prisma.specialDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialDayWithIdOnly = await prisma.specialDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialDayFindManyArgs>(args?: SelectSubset<T, SpecialDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialDay.
     * @param {SpecialDayCreateArgs} args - Arguments to create a SpecialDay.
     * @example
     * // Create one SpecialDay
     * const SpecialDay = await prisma.specialDay.create({
     *   data: {
     *     // ... data to create a SpecialDay
     *   }
     * })
     * 
     */
    create<T extends SpecialDayCreateArgs>(args: SelectSubset<T, SpecialDayCreateArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialDays.
     * @param {SpecialDayCreateManyArgs} args - Arguments to create many SpecialDays.
     * @example
     * // Create many SpecialDays
     * const specialDay = await prisma.specialDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialDayCreateManyArgs>(args?: SelectSubset<T, SpecialDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecialDays and returns the data saved in the database.
     * @param {SpecialDayCreateManyAndReturnArgs} args - Arguments to create many SpecialDays.
     * @example
     * // Create many SpecialDays
     * const specialDay = await prisma.specialDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecialDays and only return the `id`
     * const specialDayWithIdOnly = await prisma.specialDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialDayCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecialDay.
     * @param {SpecialDayDeleteArgs} args - Arguments to delete one SpecialDay.
     * @example
     * // Delete one SpecialDay
     * const SpecialDay = await prisma.specialDay.delete({
     *   where: {
     *     // ... filter to delete one SpecialDay
     *   }
     * })
     * 
     */
    delete<T extends SpecialDayDeleteArgs>(args: SelectSubset<T, SpecialDayDeleteArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialDay.
     * @param {SpecialDayUpdateArgs} args - Arguments to update one SpecialDay.
     * @example
     * // Update one SpecialDay
     * const specialDay = await prisma.specialDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialDayUpdateArgs>(args: SelectSubset<T, SpecialDayUpdateArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialDays.
     * @param {SpecialDayDeleteManyArgs} args - Arguments to filter SpecialDays to delete.
     * @example
     * // Delete a few SpecialDays
     * const { count } = await prisma.specialDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialDayDeleteManyArgs>(args?: SelectSubset<T, SpecialDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialDays
     * const specialDay = await prisma.specialDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialDayUpdateManyArgs>(args: SelectSubset<T, SpecialDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialDays and returns the data updated in the database.
     * @param {SpecialDayUpdateManyAndReturnArgs} args - Arguments to update many SpecialDays.
     * @example
     * // Update many SpecialDays
     * const specialDay = await prisma.specialDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecialDays and only return the `id`
     * const specialDayWithIdOnly = await prisma.specialDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialDayUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecialDay.
     * @param {SpecialDayUpsertArgs} args - Arguments to update or create a SpecialDay.
     * @example
     * // Update or create a SpecialDay
     * const specialDay = await prisma.specialDay.upsert({
     *   create: {
     *     // ... data to create a SpecialDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialDay we want to update
     *   }
     * })
     */
    upsert<T extends SpecialDayUpsertArgs>(args: SelectSubset<T, SpecialDayUpsertArgs<ExtArgs>>): Prisma__SpecialDayClient<$Result.GetResult<Prisma.$SpecialDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDayCountArgs} args - Arguments to filter SpecialDays to count.
     * @example
     * // Count the number of SpecialDays
     * const count = await prisma.specialDay.count({
     *   where: {
     *     // ... the filter for the SpecialDays we want to count
     *   }
     * })
    **/
    count<T extends SpecialDayCountArgs>(
      args?: Subset<T, SpecialDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialDayAggregateArgs>(args: Subset<T, SpecialDayAggregateArgs>): Prisma.PrismaPromise<GetSpecialDayAggregateType<T>>

    /**
     * Group by SpecialDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialDayGroupByArgs['orderBy'] }
        : { orderBy?: SpecialDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialDay model
   */
  readonly fields: SpecialDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gifts<T extends SpecialDay$giftsArgs<ExtArgs> = {}>(args?: Subset<T, SpecialDay$giftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecialDay model
   */
  interface SpecialDayFieldRefs {
    readonly id: FieldRef<"SpecialDay", 'String'>
    readonly personId: FieldRef<"SpecialDay", 'String'>
    readonly title: FieldRef<"SpecialDay", 'String'>
    readonly date: FieldRef<"SpecialDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpecialDay findUnique
   */
  export type SpecialDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDay to fetch.
     */
    where: SpecialDayWhereUniqueInput
  }

  /**
   * SpecialDay findUniqueOrThrow
   */
  export type SpecialDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDay to fetch.
     */
    where: SpecialDayWhereUniqueInput
  }

  /**
   * SpecialDay findFirst
   */
  export type SpecialDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDay to fetch.
     */
    where?: SpecialDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDays to fetch.
     */
    orderBy?: SpecialDayOrderByWithRelationInput | SpecialDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialDays.
     */
    cursor?: SpecialDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialDays.
     */
    distinct?: SpecialDayScalarFieldEnum | SpecialDayScalarFieldEnum[]
  }

  /**
   * SpecialDay findFirstOrThrow
   */
  export type SpecialDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDay to fetch.
     */
    where?: SpecialDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDays to fetch.
     */
    orderBy?: SpecialDayOrderByWithRelationInput | SpecialDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialDays.
     */
    cursor?: SpecialDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialDays.
     */
    distinct?: SpecialDayScalarFieldEnum | SpecialDayScalarFieldEnum[]
  }

  /**
   * SpecialDay findMany
   */
  export type SpecialDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDays to fetch.
     */
    where?: SpecialDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDays to fetch.
     */
    orderBy?: SpecialDayOrderByWithRelationInput | SpecialDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialDays.
     */
    cursor?: SpecialDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDays.
     */
    skip?: number
    distinct?: SpecialDayScalarFieldEnum | SpecialDayScalarFieldEnum[]
  }

  /**
   * SpecialDay create
   */
  export type SpecialDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialDay.
     */
    data: XOR<SpecialDayCreateInput, SpecialDayUncheckedCreateInput>
  }

  /**
   * SpecialDay createMany
   */
  export type SpecialDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialDays.
     */
    data: SpecialDayCreateManyInput | SpecialDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialDay createManyAndReturn
   */
  export type SpecialDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * The data used to create many SpecialDays.
     */
    data: SpecialDayCreateManyInput | SpecialDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialDay update
   */
  export type SpecialDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialDay.
     */
    data: XOR<SpecialDayUpdateInput, SpecialDayUncheckedUpdateInput>
    /**
     * Choose, which SpecialDay to update.
     */
    where: SpecialDayWhereUniqueInput
  }

  /**
   * SpecialDay updateMany
   */
  export type SpecialDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialDays.
     */
    data: XOR<SpecialDayUpdateManyMutationInput, SpecialDayUncheckedUpdateManyInput>
    /**
     * Filter which SpecialDays to update
     */
    where?: SpecialDayWhereInput
    /**
     * Limit how many SpecialDays to update.
     */
    limit?: number
  }

  /**
   * SpecialDay updateManyAndReturn
   */
  export type SpecialDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * The data used to update SpecialDays.
     */
    data: XOR<SpecialDayUpdateManyMutationInput, SpecialDayUncheckedUpdateManyInput>
    /**
     * Filter which SpecialDays to update
     */
    where?: SpecialDayWhereInput
    /**
     * Limit how many SpecialDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialDay upsert
   */
  export type SpecialDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialDay to update in case it exists.
     */
    where: SpecialDayWhereUniqueInput
    /**
     * In case the SpecialDay found by the `where` argument doesn't exist, create a new SpecialDay with this data.
     */
    create: XOR<SpecialDayCreateInput, SpecialDayUncheckedCreateInput>
    /**
     * In case the SpecialDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialDayUpdateInput, SpecialDayUncheckedUpdateInput>
  }

  /**
   * SpecialDay delete
   */
  export type SpecialDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
    /**
     * Filter which SpecialDay to delete.
     */
    where: SpecialDayWhereUniqueInput
  }

  /**
   * SpecialDay deleteMany
   */
  export type SpecialDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialDays to delete
     */
    where?: SpecialDayWhereInput
    /**
     * Limit how many SpecialDays to delete.
     */
    limit?: number
  }

  /**
   * SpecialDay.gifts
   */
  export type SpecialDay$giftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    cursor?: GiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * SpecialDay without action
   */
  export type SpecialDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDay
     */
    select?: SpecialDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDay
     */
    omit?: SpecialDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDayInclude<ExtArgs> | null
  }


  /**
   * Model RejectedGiftIdea
   */

  export type AggregateRejectedGiftIdea = {
    _count: RejectedGiftIdeaCountAggregateOutputType | null
    _min: RejectedGiftIdeaMinAggregateOutputType | null
    _max: RejectedGiftIdeaMaxAggregateOutputType | null
  }

  export type RejectedGiftIdeaMinAggregateOutputType = {
    id: string | null
    personId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type RejectedGiftIdeaMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type RejectedGiftIdeaCountAggregateOutputType = {
    id: number
    personId: number
    content: number
    createdAt: number
    _all: number
  }


  export type RejectedGiftIdeaMinAggregateInputType = {
    id?: true
    personId?: true
    content?: true
    createdAt?: true
  }

  export type RejectedGiftIdeaMaxAggregateInputType = {
    id?: true
    personId?: true
    content?: true
    createdAt?: true
  }

  export type RejectedGiftIdeaCountAggregateInputType = {
    id?: true
    personId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type RejectedGiftIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RejectedGiftIdea to aggregate.
     */
    where?: RejectedGiftIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedGiftIdeas to fetch.
     */
    orderBy?: RejectedGiftIdeaOrderByWithRelationInput | RejectedGiftIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RejectedGiftIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedGiftIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedGiftIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RejectedGiftIdeas
    **/
    _count?: true | RejectedGiftIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RejectedGiftIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RejectedGiftIdeaMaxAggregateInputType
  }

  export type GetRejectedGiftIdeaAggregateType<T extends RejectedGiftIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateRejectedGiftIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRejectedGiftIdea[P]>
      : GetScalarType<T[P], AggregateRejectedGiftIdea[P]>
  }




  export type RejectedGiftIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RejectedGiftIdeaWhereInput
    orderBy?: RejectedGiftIdeaOrderByWithAggregationInput | RejectedGiftIdeaOrderByWithAggregationInput[]
    by: RejectedGiftIdeaScalarFieldEnum[] | RejectedGiftIdeaScalarFieldEnum
    having?: RejectedGiftIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RejectedGiftIdeaCountAggregateInputType | true
    _min?: RejectedGiftIdeaMinAggregateInputType
    _max?: RejectedGiftIdeaMaxAggregateInputType
  }

  export type RejectedGiftIdeaGroupByOutputType = {
    id: string
    personId: string
    content: string
    createdAt: Date
    _count: RejectedGiftIdeaCountAggregateOutputType | null
    _min: RejectedGiftIdeaMinAggregateOutputType | null
    _max: RejectedGiftIdeaMaxAggregateOutputType | null
  }

  type GetRejectedGiftIdeaGroupByPayload<T extends RejectedGiftIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RejectedGiftIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RejectedGiftIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RejectedGiftIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], RejectedGiftIdeaGroupByOutputType[P]>
        }
      >
    >


  export type RejectedGiftIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    content?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rejectedGiftIdea"]>

  export type RejectedGiftIdeaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    content?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rejectedGiftIdea"]>

  export type RejectedGiftIdeaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    content?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rejectedGiftIdea"]>

  export type RejectedGiftIdeaSelectScalar = {
    id?: boolean
    personId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type RejectedGiftIdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "content" | "createdAt", ExtArgs["result"]["rejectedGiftIdea"]>
  export type RejectedGiftIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type RejectedGiftIdeaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type RejectedGiftIdeaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $RejectedGiftIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RejectedGiftIdea"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["rejectedGiftIdea"]>
    composites: {}
  }

  type RejectedGiftIdeaGetPayload<S extends boolean | null | undefined | RejectedGiftIdeaDefaultArgs> = $Result.GetResult<Prisma.$RejectedGiftIdeaPayload, S>

  type RejectedGiftIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RejectedGiftIdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RejectedGiftIdeaCountAggregateInputType | true
    }

  export interface RejectedGiftIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RejectedGiftIdea'], meta: { name: 'RejectedGiftIdea' } }
    /**
     * Find zero or one RejectedGiftIdea that matches the filter.
     * @param {RejectedGiftIdeaFindUniqueArgs} args - Arguments to find a RejectedGiftIdea
     * @example
     * // Get one RejectedGiftIdea
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RejectedGiftIdeaFindUniqueArgs>(args: SelectSubset<T, RejectedGiftIdeaFindUniqueArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RejectedGiftIdea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RejectedGiftIdeaFindUniqueOrThrowArgs} args - Arguments to find a RejectedGiftIdea
     * @example
     * // Get one RejectedGiftIdea
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RejectedGiftIdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, RejectedGiftIdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RejectedGiftIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGiftIdeaFindFirstArgs} args - Arguments to find a RejectedGiftIdea
     * @example
     * // Get one RejectedGiftIdea
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RejectedGiftIdeaFindFirstArgs>(args?: SelectSubset<T, RejectedGiftIdeaFindFirstArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RejectedGiftIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGiftIdeaFindFirstOrThrowArgs} args - Arguments to find a RejectedGiftIdea
     * @example
     * // Get one RejectedGiftIdea
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RejectedGiftIdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, RejectedGiftIdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RejectedGiftIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGiftIdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RejectedGiftIdeas
     * const rejectedGiftIdeas = await prisma.rejectedGiftIdea.findMany()
     * 
     * // Get first 10 RejectedGiftIdeas
     * const rejectedGiftIdeas = await prisma.rejectedGiftIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rejectedGiftIdeaWithIdOnly = await prisma.rejectedGiftIdea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RejectedGiftIdeaFindManyArgs>(args?: SelectSubset<T, RejectedGiftIdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RejectedGiftIdea.
     * @param {RejectedGiftIdeaCreateArgs} args - Arguments to create a RejectedGiftIdea.
     * @example
     * // Create one RejectedGiftIdea
     * const RejectedGiftIdea = await prisma.rejectedGiftIdea.create({
     *   data: {
     *     // ... data to create a RejectedGiftIdea
     *   }
     * })
     * 
     */
    create<T extends RejectedGiftIdeaCreateArgs>(args: SelectSubset<T, RejectedGiftIdeaCreateArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RejectedGiftIdeas.
     * @param {RejectedGiftIdeaCreateManyArgs} args - Arguments to create many RejectedGiftIdeas.
     * @example
     * // Create many RejectedGiftIdeas
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RejectedGiftIdeaCreateManyArgs>(args?: SelectSubset<T, RejectedGiftIdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RejectedGiftIdeas and returns the data saved in the database.
     * @param {RejectedGiftIdeaCreateManyAndReturnArgs} args - Arguments to create many RejectedGiftIdeas.
     * @example
     * // Create many RejectedGiftIdeas
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RejectedGiftIdeas and only return the `id`
     * const rejectedGiftIdeaWithIdOnly = await prisma.rejectedGiftIdea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RejectedGiftIdeaCreateManyAndReturnArgs>(args?: SelectSubset<T, RejectedGiftIdeaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RejectedGiftIdea.
     * @param {RejectedGiftIdeaDeleteArgs} args - Arguments to delete one RejectedGiftIdea.
     * @example
     * // Delete one RejectedGiftIdea
     * const RejectedGiftIdea = await prisma.rejectedGiftIdea.delete({
     *   where: {
     *     // ... filter to delete one RejectedGiftIdea
     *   }
     * })
     * 
     */
    delete<T extends RejectedGiftIdeaDeleteArgs>(args: SelectSubset<T, RejectedGiftIdeaDeleteArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RejectedGiftIdea.
     * @param {RejectedGiftIdeaUpdateArgs} args - Arguments to update one RejectedGiftIdea.
     * @example
     * // Update one RejectedGiftIdea
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RejectedGiftIdeaUpdateArgs>(args: SelectSubset<T, RejectedGiftIdeaUpdateArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RejectedGiftIdeas.
     * @param {RejectedGiftIdeaDeleteManyArgs} args - Arguments to filter RejectedGiftIdeas to delete.
     * @example
     * // Delete a few RejectedGiftIdeas
     * const { count } = await prisma.rejectedGiftIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RejectedGiftIdeaDeleteManyArgs>(args?: SelectSubset<T, RejectedGiftIdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RejectedGiftIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGiftIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RejectedGiftIdeas
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RejectedGiftIdeaUpdateManyArgs>(args: SelectSubset<T, RejectedGiftIdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RejectedGiftIdeas and returns the data updated in the database.
     * @param {RejectedGiftIdeaUpdateManyAndReturnArgs} args - Arguments to update many RejectedGiftIdeas.
     * @example
     * // Update many RejectedGiftIdeas
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RejectedGiftIdeas and only return the `id`
     * const rejectedGiftIdeaWithIdOnly = await prisma.rejectedGiftIdea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RejectedGiftIdeaUpdateManyAndReturnArgs>(args: SelectSubset<T, RejectedGiftIdeaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RejectedGiftIdea.
     * @param {RejectedGiftIdeaUpsertArgs} args - Arguments to update or create a RejectedGiftIdea.
     * @example
     * // Update or create a RejectedGiftIdea
     * const rejectedGiftIdea = await prisma.rejectedGiftIdea.upsert({
     *   create: {
     *     // ... data to create a RejectedGiftIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RejectedGiftIdea we want to update
     *   }
     * })
     */
    upsert<T extends RejectedGiftIdeaUpsertArgs>(args: SelectSubset<T, RejectedGiftIdeaUpsertArgs<ExtArgs>>): Prisma__RejectedGiftIdeaClient<$Result.GetResult<Prisma.$RejectedGiftIdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RejectedGiftIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGiftIdeaCountArgs} args - Arguments to filter RejectedGiftIdeas to count.
     * @example
     * // Count the number of RejectedGiftIdeas
     * const count = await prisma.rejectedGiftIdea.count({
     *   where: {
     *     // ... the filter for the RejectedGiftIdeas we want to count
     *   }
     * })
    **/
    count<T extends RejectedGiftIdeaCountArgs>(
      args?: Subset<T, RejectedGiftIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RejectedGiftIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RejectedGiftIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGiftIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RejectedGiftIdeaAggregateArgs>(args: Subset<T, RejectedGiftIdeaAggregateArgs>): Prisma.PrismaPromise<GetRejectedGiftIdeaAggregateType<T>>

    /**
     * Group by RejectedGiftIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGiftIdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RejectedGiftIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RejectedGiftIdeaGroupByArgs['orderBy'] }
        : { orderBy?: RejectedGiftIdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RejectedGiftIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRejectedGiftIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RejectedGiftIdea model
   */
  readonly fields: RejectedGiftIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RejectedGiftIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RejectedGiftIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RejectedGiftIdea model
   */
  interface RejectedGiftIdeaFieldRefs {
    readonly id: FieldRef<"RejectedGiftIdea", 'String'>
    readonly personId: FieldRef<"RejectedGiftIdea", 'String'>
    readonly content: FieldRef<"RejectedGiftIdea", 'String'>
    readonly createdAt: FieldRef<"RejectedGiftIdea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RejectedGiftIdea findUnique
   */
  export type RejectedGiftIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * Filter, which RejectedGiftIdea to fetch.
     */
    where: RejectedGiftIdeaWhereUniqueInput
  }

  /**
   * RejectedGiftIdea findUniqueOrThrow
   */
  export type RejectedGiftIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * Filter, which RejectedGiftIdea to fetch.
     */
    where: RejectedGiftIdeaWhereUniqueInput
  }

  /**
   * RejectedGiftIdea findFirst
   */
  export type RejectedGiftIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * Filter, which RejectedGiftIdea to fetch.
     */
    where?: RejectedGiftIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedGiftIdeas to fetch.
     */
    orderBy?: RejectedGiftIdeaOrderByWithRelationInput | RejectedGiftIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RejectedGiftIdeas.
     */
    cursor?: RejectedGiftIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedGiftIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedGiftIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RejectedGiftIdeas.
     */
    distinct?: RejectedGiftIdeaScalarFieldEnum | RejectedGiftIdeaScalarFieldEnum[]
  }

  /**
   * RejectedGiftIdea findFirstOrThrow
   */
  export type RejectedGiftIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * Filter, which RejectedGiftIdea to fetch.
     */
    where?: RejectedGiftIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedGiftIdeas to fetch.
     */
    orderBy?: RejectedGiftIdeaOrderByWithRelationInput | RejectedGiftIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RejectedGiftIdeas.
     */
    cursor?: RejectedGiftIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedGiftIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedGiftIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RejectedGiftIdeas.
     */
    distinct?: RejectedGiftIdeaScalarFieldEnum | RejectedGiftIdeaScalarFieldEnum[]
  }

  /**
   * RejectedGiftIdea findMany
   */
  export type RejectedGiftIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * Filter, which RejectedGiftIdeas to fetch.
     */
    where?: RejectedGiftIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedGiftIdeas to fetch.
     */
    orderBy?: RejectedGiftIdeaOrderByWithRelationInput | RejectedGiftIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RejectedGiftIdeas.
     */
    cursor?: RejectedGiftIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedGiftIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedGiftIdeas.
     */
    skip?: number
    distinct?: RejectedGiftIdeaScalarFieldEnum | RejectedGiftIdeaScalarFieldEnum[]
  }

  /**
   * RejectedGiftIdea create
   */
  export type RejectedGiftIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a RejectedGiftIdea.
     */
    data: XOR<RejectedGiftIdeaCreateInput, RejectedGiftIdeaUncheckedCreateInput>
  }

  /**
   * RejectedGiftIdea createMany
   */
  export type RejectedGiftIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RejectedGiftIdeas.
     */
    data: RejectedGiftIdeaCreateManyInput | RejectedGiftIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RejectedGiftIdea createManyAndReturn
   */
  export type RejectedGiftIdeaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * The data used to create many RejectedGiftIdeas.
     */
    data: RejectedGiftIdeaCreateManyInput | RejectedGiftIdeaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RejectedGiftIdea update
   */
  export type RejectedGiftIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a RejectedGiftIdea.
     */
    data: XOR<RejectedGiftIdeaUpdateInput, RejectedGiftIdeaUncheckedUpdateInput>
    /**
     * Choose, which RejectedGiftIdea to update.
     */
    where: RejectedGiftIdeaWhereUniqueInput
  }

  /**
   * RejectedGiftIdea updateMany
   */
  export type RejectedGiftIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RejectedGiftIdeas.
     */
    data: XOR<RejectedGiftIdeaUpdateManyMutationInput, RejectedGiftIdeaUncheckedUpdateManyInput>
    /**
     * Filter which RejectedGiftIdeas to update
     */
    where?: RejectedGiftIdeaWhereInput
    /**
     * Limit how many RejectedGiftIdeas to update.
     */
    limit?: number
  }

  /**
   * RejectedGiftIdea updateManyAndReturn
   */
  export type RejectedGiftIdeaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * The data used to update RejectedGiftIdeas.
     */
    data: XOR<RejectedGiftIdeaUpdateManyMutationInput, RejectedGiftIdeaUncheckedUpdateManyInput>
    /**
     * Filter which RejectedGiftIdeas to update
     */
    where?: RejectedGiftIdeaWhereInput
    /**
     * Limit how many RejectedGiftIdeas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RejectedGiftIdea upsert
   */
  export type RejectedGiftIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the RejectedGiftIdea to update in case it exists.
     */
    where: RejectedGiftIdeaWhereUniqueInput
    /**
     * In case the RejectedGiftIdea found by the `where` argument doesn't exist, create a new RejectedGiftIdea with this data.
     */
    create: XOR<RejectedGiftIdeaCreateInput, RejectedGiftIdeaUncheckedCreateInput>
    /**
     * In case the RejectedGiftIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RejectedGiftIdeaUpdateInput, RejectedGiftIdeaUncheckedUpdateInput>
  }

  /**
   * RejectedGiftIdea delete
   */
  export type RejectedGiftIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
    /**
     * Filter which RejectedGiftIdea to delete.
     */
    where: RejectedGiftIdeaWhereUniqueInput
  }

  /**
   * RejectedGiftIdea deleteMany
   */
  export type RejectedGiftIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RejectedGiftIdeas to delete
     */
    where?: RejectedGiftIdeaWhereInput
    /**
     * Limit how many RejectedGiftIdeas to delete.
     */
    limit?: number
  }

  /**
   * RejectedGiftIdea without action
   */
  export type RejectedGiftIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedGiftIdea
     */
    select?: RejectedGiftIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedGiftIdea
     */
    omit?: RejectedGiftIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedGiftIdeaInclude<ExtArgs> | null
  }


  /**
   * Model Trait
   */

  export type AggregateTrait = {
    _count: TraitCountAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  export type TraitMinAggregateOutputType = {
    id: string | null
    personId: string | null
    type: $Enums.TraitType | null
    description: string | null
  }

  export type TraitMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    type: $Enums.TraitType | null
    description: string | null
  }

  export type TraitCountAggregateOutputType = {
    id: number
    personId: number
    type: number
    description: number
    _all: number
  }


  export type TraitMinAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    description?: true
  }

  export type TraitMaxAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    description?: true
  }

  export type TraitCountAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    description?: true
    _all?: true
  }

  export type TraitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trait to aggregate.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Traits
    **/
    _count?: true | TraitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraitMaxAggregateInputType
  }

  export type GetTraitAggregateType<T extends TraitAggregateArgs> = {
        [P in keyof T & keyof AggregateTrait]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrait[P]>
      : GetScalarType<T[P], AggregateTrait[P]>
  }




  export type TraitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraitWhereInput
    orderBy?: TraitOrderByWithAggregationInput | TraitOrderByWithAggregationInput[]
    by: TraitScalarFieldEnum[] | TraitScalarFieldEnum
    having?: TraitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraitCountAggregateInputType | true
    _min?: TraitMinAggregateInputType
    _max?: TraitMaxAggregateInputType
  }

  export type TraitGroupByOutputType = {
    id: string
    personId: string
    type: $Enums.TraitType
    description: string
    _count: TraitCountAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  type GetTraitGroupByPayload<T extends TraitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraitGroupByOutputType[P]>
            : GetScalarType<T[P], TraitGroupByOutputType[P]>
        }
      >
    >


  export type TraitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    description?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    description?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    description?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectScalar = {
    id?: boolean
    personId?: boolean
    type?: boolean
    description?: boolean
  }

  export type TraitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "type" | "description", ExtArgs["result"]["trait"]>
  export type TraitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type TraitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type TraitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $TraitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trait"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      type: $Enums.TraitType
      description: string
    }, ExtArgs["result"]["trait"]>
    composites: {}
  }

  type TraitGetPayload<S extends boolean | null | undefined | TraitDefaultArgs> = $Result.GetResult<Prisma.$TraitPayload, S>

  type TraitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraitCountAggregateInputType | true
    }

  export interface TraitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trait'], meta: { name: 'Trait' } }
    /**
     * Find zero or one Trait that matches the filter.
     * @param {TraitFindUniqueArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraitFindUniqueArgs>(args: SelectSubset<T, TraitFindUniqueArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trait that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraitFindUniqueOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraitFindUniqueOrThrowArgs>(args: SelectSubset<T, TraitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindFirstArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraitFindFirstArgs>(args?: SelectSubset<T, TraitFindFirstArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindFirstOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraitFindFirstOrThrowArgs>(args?: SelectSubset<T, TraitFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Traits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traits
     * const traits = await prisma.trait.findMany()
     * 
     * // Get first 10 Traits
     * const traits = await prisma.trait.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traitWithIdOnly = await prisma.trait.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TraitFindManyArgs>(args?: SelectSubset<T, TraitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trait.
     * @param {TraitCreateArgs} args - Arguments to create a Trait.
     * @example
     * // Create one Trait
     * const Trait = await prisma.trait.create({
     *   data: {
     *     // ... data to create a Trait
     *   }
     * })
     * 
     */
    create<T extends TraitCreateArgs>(args: SelectSubset<T, TraitCreateArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Traits.
     * @param {TraitCreateManyArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraitCreateManyArgs>(args?: SelectSubset<T, TraitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Traits and returns the data saved in the database.
     * @param {TraitCreateManyAndReturnArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraitCreateManyAndReturnArgs>(args?: SelectSubset<T, TraitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trait.
     * @param {TraitDeleteArgs} args - Arguments to delete one Trait.
     * @example
     * // Delete one Trait
     * const Trait = await prisma.trait.delete({
     *   where: {
     *     // ... filter to delete one Trait
     *   }
     * })
     * 
     */
    delete<T extends TraitDeleteArgs>(args: SelectSubset<T, TraitDeleteArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trait.
     * @param {TraitUpdateArgs} args - Arguments to update one Trait.
     * @example
     * // Update one Trait
     * const trait = await prisma.trait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraitUpdateArgs>(args: SelectSubset<T, TraitUpdateArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Traits.
     * @param {TraitDeleteManyArgs} args - Arguments to filter Traits to delete.
     * @example
     * // Delete a few Traits
     * const { count } = await prisma.trait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraitDeleteManyArgs>(args?: SelectSubset<T, TraitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraitUpdateManyArgs>(args: SelectSubset<T, TraitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits and returns the data updated in the database.
     * @param {TraitUpdateManyAndReturnArgs} args - Arguments to update many Traits.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TraitUpdateManyAndReturnArgs>(args: SelectSubset<T, TraitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trait.
     * @param {TraitUpsertArgs} args - Arguments to update or create a Trait.
     * @example
     * // Update or create a Trait
     * const trait = await prisma.trait.upsert({
     *   create: {
     *     // ... data to create a Trait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trait we want to update
     *   }
     * })
     */
    upsert<T extends TraitUpsertArgs>(args: SelectSubset<T, TraitUpsertArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitCountArgs} args - Arguments to filter Traits to count.
     * @example
     * // Count the number of Traits
     * const count = await prisma.trait.count({
     *   where: {
     *     // ... the filter for the Traits we want to count
     *   }
     * })
    **/
    count<T extends TraitCountArgs>(
      args?: Subset<T, TraitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TraitAggregateArgs>(args: Subset<T, TraitAggregateArgs>): Prisma.PrismaPromise<GetTraitAggregateType<T>>

    /**
     * Group by Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TraitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraitGroupByArgs['orderBy'] }
        : { orderBy?: TraitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TraitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trait model
   */
  readonly fields: TraitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trait.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trait model
   */
  interface TraitFieldRefs {
    readonly id: FieldRef<"Trait", 'String'>
    readonly personId: FieldRef<"Trait", 'String'>
    readonly type: FieldRef<"Trait", 'TraitType'>
    readonly description: FieldRef<"Trait", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trait findUnique
   */
  export type TraitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait findUniqueOrThrow
   */
  export type TraitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait findFirst
   */
  export type TraitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait findFirstOrThrow
   */
  export type TraitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait findMany
   */
  export type TraitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Traits to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait create
   */
  export type TraitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The data needed to create a Trait.
     */
    data: XOR<TraitCreateInput, TraitUncheckedCreateInput>
  }

  /**
   * Trait createMany
   */
  export type TraitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Traits.
     */
    data: TraitCreateManyInput | TraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trait createManyAndReturn
   */
  export type TraitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * The data used to create many Traits.
     */
    data: TraitCreateManyInput | TraitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trait update
   */
  export type TraitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The data needed to update a Trait.
     */
    data: XOR<TraitUpdateInput, TraitUncheckedUpdateInput>
    /**
     * Choose, which Trait to update.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait updateMany
   */
  export type TraitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Traits.
     */
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyInput>
    /**
     * Filter which Traits to update
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to update.
     */
    limit?: number
  }

  /**
   * Trait updateManyAndReturn
   */
  export type TraitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * The data used to update Traits.
     */
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyInput>
    /**
     * Filter which Traits to update
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trait upsert
   */
  export type TraitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The filter to search for the Trait to update in case it exists.
     */
    where: TraitWhereUniqueInput
    /**
     * In case the Trait found by the `where` argument doesn't exist, create a new Trait with this data.
     */
    create: XOR<TraitCreateInput, TraitUncheckedCreateInput>
    /**
     * In case the Trait was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraitUpdateInput, TraitUncheckedUpdateInput>
  }

  /**
   * Trait delete
   */
  export type TraitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter which Trait to delete.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait deleteMany
   */
  export type TraitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Traits to delete
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to delete.
     */
    limit?: number
  }

  /**
   * Trait without action
   */
  export type TraitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    relationship: 'relationship',
    userId: 'userId'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const GiftScalarFieldEnum: {
    id: 'id',
    title: 'title',
    website: 'website',
    done: 'done',
    specialDayId: 'specialDayId',
    createdAt: 'createdAt'
  };

  export type GiftScalarFieldEnum = (typeof GiftScalarFieldEnum)[keyof typeof GiftScalarFieldEnum]


  export const LoveCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    catalyst: 'catalyst',
    description: 'description'
  };

  export type LoveCategoryScalarFieldEnum = (typeof LoveCategoryScalarFieldEnum)[keyof typeof LoveCategoryScalarFieldEnum]


  export const PersonLoveCategoryScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    loveCategoryId: 'loveCategoryId',
    note: 'note'
  };

  export type PersonLoveCategoryScalarFieldEnum = (typeof PersonLoveCategoryScalarFieldEnum)[keyof typeof PersonLoveCategoryScalarFieldEnum]


  export const SpecialDayScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    title: 'title',
    date: 'date'
  };

  export type SpecialDayScalarFieldEnum = (typeof SpecialDayScalarFieldEnum)[keyof typeof SpecialDayScalarFieldEnum]


  export const RejectedGiftIdeaScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type RejectedGiftIdeaScalarFieldEnum = (typeof RejectedGiftIdeaScalarFieldEnum)[keyof typeof RejectedGiftIdeaScalarFieldEnum]


  export const TraitScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    type: 'type',
    description: 'description'
  };

  export type TraitScalarFieldEnum = (typeof TraitScalarFieldEnum)[keyof typeof TraitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TraitType'
   */
  export type EnumTraitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TraitType'>
    


  /**
   * Reference to a field of type 'TraitType[]'
   */
  export type ListEnumTraitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TraitType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    persons?: PersonListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    persons?: PersonOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    persons?: PersonListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    relationship?: StringFilter<"Person"> | string
    userId?: StringFilter<"Person"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loveTypes?: PersonLoveCategoryListRelationFilter
    specialDays?: SpecialDayListRelationFilter
    rejectedGiftIdeas?: RejectedGiftIdeaListRelationFilter
    traits?: TraitListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    relationship?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    loveTypes?: PersonLoveCategoryOrderByRelationAggregateInput
    specialDays?: SpecialDayOrderByRelationAggregateInput
    rejectedGiftIdeas?: RejectedGiftIdeaOrderByRelationAggregateInput
    traits?: TraitOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    relationship?: StringFilter<"Person"> | string
    userId?: StringFilter<"Person"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loveTypes?: PersonLoveCategoryListRelationFilter
    specialDays?: SpecialDayListRelationFilter
    rejectedGiftIdeas?: RejectedGiftIdeaListRelationFilter
    traits?: TraitListRelationFilter
  }, "id">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    relationship?: SortOrder
    userId?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    name?: StringWithAggregatesFilter<"Person"> | string
    relationship?: StringWithAggregatesFilter<"Person"> | string
    userId?: StringWithAggregatesFilter<"Person"> | string
  }

  export type GiftWhereInput = {
    AND?: GiftWhereInput | GiftWhereInput[]
    OR?: GiftWhereInput[]
    NOT?: GiftWhereInput | GiftWhereInput[]
    id?: StringFilter<"Gift"> | string
    title?: StringFilter<"Gift"> | string
    website?: StringFilter<"Gift"> | string
    done?: BoolFilter<"Gift"> | boolean
    specialDayId?: StringFilter<"Gift"> | string
    createdAt?: DateTimeFilter<"Gift"> | Date | string
    specialDay?: XOR<SpecialDayScalarRelationFilter, SpecialDayWhereInput>
  }

  export type GiftOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    website?: SortOrder
    done?: SortOrder
    specialDayId?: SortOrder
    createdAt?: SortOrder
    specialDay?: SpecialDayOrderByWithRelationInput
  }

  export type GiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GiftWhereInput | GiftWhereInput[]
    OR?: GiftWhereInput[]
    NOT?: GiftWhereInput | GiftWhereInput[]
    title?: StringFilter<"Gift"> | string
    website?: StringFilter<"Gift"> | string
    done?: BoolFilter<"Gift"> | boolean
    specialDayId?: StringFilter<"Gift"> | string
    createdAt?: DateTimeFilter<"Gift"> | Date | string
    specialDay?: XOR<SpecialDayScalarRelationFilter, SpecialDayWhereInput>
  }, "id">

  export type GiftOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    website?: SortOrder
    done?: SortOrder
    specialDayId?: SortOrder
    createdAt?: SortOrder
    _count?: GiftCountOrderByAggregateInput
    _max?: GiftMaxOrderByAggregateInput
    _min?: GiftMinOrderByAggregateInput
  }

  export type GiftScalarWhereWithAggregatesInput = {
    AND?: GiftScalarWhereWithAggregatesInput | GiftScalarWhereWithAggregatesInput[]
    OR?: GiftScalarWhereWithAggregatesInput[]
    NOT?: GiftScalarWhereWithAggregatesInput | GiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gift"> | string
    title?: StringWithAggregatesFilter<"Gift"> | string
    website?: StringWithAggregatesFilter<"Gift"> | string
    done?: BoolWithAggregatesFilter<"Gift"> | boolean
    specialDayId?: StringWithAggregatesFilter<"Gift"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Gift"> | Date | string
  }

  export type LoveCategoryWhereInput = {
    AND?: LoveCategoryWhereInput | LoveCategoryWhereInput[]
    OR?: LoveCategoryWhereInput[]
    NOT?: LoveCategoryWhereInput | LoveCategoryWhereInput[]
    id?: StringFilter<"LoveCategory"> | string
    name?: StringFilter<"LoveCategory"> | string
    catalyst?: StringFilter<"LoveCategory"> | string
    description?: StringFilter<"LoveCategory"> | string
    persons?: PersonLoveCategoryListRelationFilter
  }

  export type LoveCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    catalyst?: SortOrder
    description?: SortOrder
    persons?: PersonLoveCategoryOrderByRelationAggregateInput
  }

  export type LoveCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoveCategoryWhereInput | LoveCategoryWhereInput[]
    OR?: LoveCategoryWhereInput[]
    NOT?: LoveCategoryWhereInput | LoveCategoryWhereInput[]
    name?: StringFilter<"LoveCategory"> | string
    catalyst?: StringFilter<"LoveCategory"> | string
    description?: StringFilter<"LoveCategory"> | string
    persons?: PersonLoveCategoryListRelationFilter
  }, "id">

  export type LoveCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    catalyst?: SortOrder
    description?: SortOrder
    _count?: LoveCategoryCountOrderByAggregateInput
    _max?: LoveCategoryMaxOrderByAggregateInput
    _min?: LoveCategoryMinOrderByAggregateInput
  }

  export type LoveCategoryScalarWhereWithAggregatesInput = {
    AND?: LoveCategoryScalarWhereWithAggregatesInput | LoveCategoryScalarWhereWithAggregatesInput[]
    OR?: LoveCategoryScalarWhereWithAggregatesInput[]
    NOT?: LoveCategoryScalarWhereWithAggregatesInput | LoveCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoveCategory"> | string
    name?: StringWithAggregatesFilter<"LoveCategory"> | string
    catalyst?: StringWithAggregatesFilter<"LoveCategory"> | string
    description?: StringWithAggregatesFilter<"LoveCategory"> | string
  }

  export type PersonLoveCategoryWhereInput = {
    AND?: PersonLoveCategoryWhereInput | PersonLoveCategoryWhereInput[]
    OR?: PersonLoveCategoryWhereInput[]
    NOT?: PersonLoveCategoryWhereInput | PersonLoveCategoryWhereInput[]
    id?: StringFilter<"PersonLoveCategory"> | string
    personId?: StringFilter<"PersonLoveCategory"> | string
    loveCategoryId?: StringFilter<"PersonLoveCategory"> | string
    note?: StringNullableFilter<"PersonLoveCategory"> | string | null
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    loveCategory?: XOR<LoveCategoryScalarRelationFilter, LoveCategoryWhereInput>
  }

  export type PersonLoveCategoryOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    loveCategoryId?: SortOrder
    note?: SortOrderInput | SortOrder
    person?: PersonOrderByWithRelationInput
    loveCategory?: LoveCategoryOrderByWithRelationInput
  }

  export type PersonLoveCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonLoveCategoryWhereInput | PersonLoveCategoryWhereInput[]
    OR?: PersonLoveCategoryWhereInput[]
    NOT?: PersonLoveCategoryWhereInput | PersonLoveCategoryWhereInput[]
    personId?: StringFilter<"PersonLoveCategory"> | string
    loveCategoryId?: StringFilter<"PersonLoveCategory"> | string
    note?: StringNullableFilter<"PersonLoveCategory"> | string | null
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    loveCategory?: XOR<LoveCategoryScalarRelationFilter, LoveCategoryWhereInput>
  }, "id">

  export type PersonLoveCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    loveCategoryId?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: PersonLoveCategoryCountOrderByAggregateInput
    _max?: PersonLoveCategoryMaxOrderByAggregateInput
    _min?: PersonLoveCategoryMinOrderByAggregateInput
  }

  export type PersonLoveCategoryScalarWhereWithAggregatesInput = {
    AND?: PersonLoveCategoryScalarWhereWithAggregatesInput | PersonLoveCategoryScalarWhereWithAggregatesInput[]
    OR?: PersonLoveCategoryScalarWhereWithAggregatesInput[]
    NOT?: PersonLoveCategoryScalarWhereWithAggregatesInput | PersonLoveCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonLoveCategory"> | string
    personId?: StringWithAggregatesFilter<"PersonLoveCategory"> | string
    loveCategoryId?: StringWithAggregatesFilter<"PersonLoveCategory"> | string
    note?: StringNullableWithAggregatesFilter<"PersonLoveCategory"> | string | null
  }

  export type SpecialDayWhereInput = {
    AND?: SpecialDayWhereInput | SpecialDayWhereInput[]
    OR?: SpecialDayWhereInput[]
    NOT?: SpecialDayWhereInput | SpecialDayWhereInput[]
    id?: StringFilter<"SpecialDay"> | string
    personId?: StringFilter<"SpecialDay"> | string
    title?: StringFilter<"SpecialDay"> | string
    date?: DateTimeFilter<"SpecialDay"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    gifts?: GiftListRelationFilter
  }

  export type SpecialDayOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    person?: PersonOrderByWithRelationInput
    gifts?: GiftOrderByRelationAggregateInput
  }

  export type SpecialDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecialDayWhereInput | SpecialDayWhereInput[]
    OR?: SpecialDayWhereInput[]
    NOT?: SpecialDayWhereInput | SpecialDayWhereInput[]
    personId?: StringFilter<"SpecialDay"> | string
    title?: StringFilter<"SpecialDay"> | string
    date?: DateTimeFilter<"SpecialDay"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    gifts?: GiftListRelationFilter
  }, "id">

  export type SpecialDayOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    _count?: SpecialDayCountOrderByAggregateInput
    _max?: SpecialDayMaxOrderByAggregateInput
    _min?: SpecialDayMinOrderByAggregateInput
  }

  export type SpecialDayScalarWhereWithAggregatesInput = {
    AND?: SpecialDayScalarWhereWithAggregatesInput | SpecialDayScalarWhereWithAggregatesInput[]
    OR?: SpecialDayScalarWhereWithAggregatesInput[]
    NOT?: SpecialDayScalarWhereWithAggregatesInput | SpecialDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpecialDay"> | string
    personId?: StringWithAggregatesFilter<"SpecialDay"> | string
    title?: StringWithAggregatesFilter<"SpecialDay"> | string
    date?: DateTimeWithAggregatesFilter<"SpecialDay"> | Date | string
  }

  export type RejectedGiftIdeaWhereInput = {
    AND?: RejectedGiftIdeaWhereInput | RejectedGiftIdeaWhereInput[]
    OR?: RejectedGiftIdeaWhereInput[]
    NOT?: RejectedGiftIdeaWhereInput | RejectedGiftIdeaWhereInput[]
    id?: StringFilter<"RejectedGiftIdea"> | string
    personId?: StringFilter<"RejectedGiftIdea"> | string
    content?: StringFilter<"RejectedGiftIdea"> | string
    createdAt?: DateTimeFilter<"RejectedGiftIdea"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type RejectedGiftIdeaOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type RejectedGiftIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RejectedGiftIdeaWhereInput | RejectedGiftIdeaWhereInput[]
    OR?: RejectedGiftIdeaWhereInput[]
    NOT?: RejectedGiftIdeaWhereInput | RejectedGiftIdeaWhereInput[]
    personId?: StringFilter<"RejectedGiftIdea"> | string
    content?: StringFilter<"RejectedGiftIdea"> | string
    createdAt?: DateTimeFilter<"RejectedGiftIdea"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type RejectedGiftIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: RejectedGiftIdeaCountOrderByAggregateInput
    _max?: RejectedGiftIdeaMaxOrderByAggregateInput
    _min?: RejectedGiftIdeaMinOrderByAggregateInput
  }

  export type RejectedGiftIdeaScalarWhereWithAggregatesInput = {
    AND?: RejectedGiftIdeaScalarWhereWithAggregatesInput | RejectedGiftIdeaScalarWhereWithAggregatesInput[]
    OR?: RejectedGiftIdeaScalarWhereWithAggregatesInput[]
    NOT?: RejectedGiftIdeaScalarWhereWithAggregatesInput | RejectedGiftIdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RejectedGiftIdea"> | string
    personId?: StringWithAggregatesFilter<"RejectedGiftIdea"> | string
    content?: StringWithAggregatesFilter<"RejectedGiftIdea"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RejectedGiftIdea"> | Date | string
  }

  export type TraitWhereInput = {
    AND?: TraitWhereInput | TraitWhereInput[]
    OR?: TraitWhereInput[]
    NOT?: TraitWhereInput | TraitWhereInput[]
    id?: StringFilter<"Trait"> | string
    personId?: StringFilter<"Trait"> | string
    type?: EnumTraitTypeFilter<"Trait"> | $Enums.TraitType
    description?: StringFilter<"Trait"> | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type TraitOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type TraitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TraitWhereInput | TraitWhereInput[]
    OR?: TraitWhereInput[]
    NOT?: TraitWhereInput | TraitWhereInput[]
    personId?: StringFilter<"Trait"> | string
    type?: EnumTraitTypeFilter<"Trait"> | $Enums.TraitType
    description?: StringFilter<"Trait"> | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type TraitOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    _count?: TraitCountOrderByAggregateInput
    _max?: TraitMaxOrderByAggregateInput
    _min?: TraitMinOrderByAggregateInput
  }

  export type TraitScalarWhereWithAggregatesInput = {
    AND?: TraitScalarWhereWithAggregatesInput | TraitScalarWhereWithAggregatesInput[]
    OR?: TraitScalarWhereWithAggregatesInput[]
    NOT?: TraitScalarWhereWithAggregatesInput | TraitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trait"> | string
    personId?: StringWithAggregatesFilter<"Trait"> | string
    type?: EnumTraitTypeWithAggregatesFilter<"Trait"> | $Enums.TraitType
    description?: StringWithAggregatesFilter<"Trait"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    persons?: PersonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    persons?: PersonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    persons?: PersonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    persons?: PersonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    name: string
    relationship: string
    user: UserCreateNestedOneWithoutPersonsInput
    loveTypes?: PersonLoveCategoryCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaCreateNestedManyWithoutPersonInput
    traits?: TraitCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name: string
    relationship: string
    userId: string
    loveTypes?: PersonLoveCategoryUncheckedCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayUncheckedCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedCreateNestedManyWithoutPersonInput
    traits?: TraitUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPersonsNestedInput
    loveTypes?: PersonLoveCategoryUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUpdateManyWithoutPersonNestedInput
    traits?: TraitUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loveTypes?: PersonLoveCategoryUncheckedUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUncheckedUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedUpdateManyWithoutPersonNestedInput
    traits?: TraitUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    name: string
    relationship: string
    userId: string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GiftCreateInput = {
    id?: string
    title: string
    website: string
    done?: boolean
    createdAt?: Date | string
    specialDay: SpecialDayCreateNestedOneWithoutGiftsInput
  }

  export type GiftUncheckedCreateInput = {
    id?: string
    title: string
    website: string
    done?: boolean
    specialDayId: string
    createdAt?: Date | string
  }

  export type GiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialDay?: SpecialDayUpdateOneRequiredWithoutGiftsNestedInput
  }

  export type GiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    specialDayId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftCreateManyInput = {
    id?: string
    title: string
    website: string
    done?: boolean
    specialDayId: string
    createdAt?: Date | string
  }

  export type GiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    specialDayId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCategoryCreateInput = {
    id?: string
    name: string
    catalyst: string
    description: string
    persons?: PersonLoveCategoryCreateNestedManyWithoutLoveCategoryInput
  }

  export type LoveCategoryUncheckedCreateInput = {
    id?: string
    name: string
    catalyst: string
    description: string
    persons?: PersonLoveCategoryUncheckedCreateNestedManyWithoutLoveCategoryInput
  }

  export type LoveCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    catalyst?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    persons?: PersonLoveCategoryUpdateManyWithoutLoveCategoryNestedInput
  }

  export type LoveCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    catalyst?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    persons?: PersonLoveCategoryUncheckedUpdateManyWithoutLoveCategoryNestedInput
  }

  export type LoveCategoryCreateManyInput = {
    id?: string
    name: string
    catalyst: string
    description: string
  }

  export type LoveCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    catalyst?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LoveCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    catalyst?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PersonLoveCategoryCreateInput = {
    id?: string
    note?: string | null
    person: PersonCreateNestedOneWithoutLoveTypesInput
    loveCategory: LoveCategoryCreateNestedOneWithoutPersonsInput
  }

  export type PersonLoveCategoryUncheckedCreateInput = {
    id?: string
    personId: string
    loveCategoryId: string
    note?: string | null
  }

  export type PersonLoveCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    person?: PersonUpdateOneRequiredWithoutLoveTypesNestedInput
    loveCategory?: LoveCategoryUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonLoveCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    loveCategoryId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonLoveCategoryCreateManyInput = {
    id?: string
    personId: string
    loveCategoryId: string
    note?: string | null
  }

  export type PersonLoveCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonLoveCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    loveCategoryId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpecialDayCreateInput = {
    id?: string
    title: string
    date: Date | string
    person: PersonCreateNestedOneWithoutSpecialDaysInput
    gifts?: GiftCreateNestedManyWithoutSpecialDayInput
  }

  export type SpecialDayUncheckedCreateInput = {
    id?: string
    personId: string
    title: string
    date: Date | string
    gifts?: GiftUncheckedCreateNestedManyWithoutSpecialDayInput
  }

  export type SpecialDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSpecialDaysNestedInput
    gifts?: GiftUpdateManyWithoutSpecialDayNestedInput
  }

  export type SpecialDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: GiftUncheckedUpdateManyWithoutSpecialDayNestedInput
  }

  export type SpecialDayCreateManyInput = {
    id?: string
    personId: string
    title: string
    date: Date | string
  }

  export type SpecialDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedGiftIdeaCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutRejectedGiftIdeasInput
  }

  export type RejectedGiftIdeaUncheckedCreateInput = {
    id?: string
    personId: string
    content: string
    createdAt?: Date | string
  }

  export type RejectedGiftIdeaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutRejectedGiftIdeasNestedInput
  }

  export type RejectedGiftIdeaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedGiftIdeaCreateManyInput = {
    id?: string
    personId: string
    content: string
    createdAt?: Date | string
  }

  export type RejectedGiftIdeaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedGiftIdeaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraitCreateInput = {
    id?: string
    type: $Enums.TraitType
    description: string
    person: PersonCreateNestedOneWithoutTraitsInput
  }

  export type TraitUncheckedCreateInput = {
    id?: string
    personId: string
    type: $Enums.TraitType
    description: string
  }

  export type TraitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTraitTypeFieldUpdateOperationsInput | $Enums.TraitType
    description?: StringFieldUpdateOperationsInput | string
    person?: PersonUpdateOneRequiredWithoutTraitsNestedInput
  }

  export type TraitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    type?: EnumTraitTypeFieldUpdateOperationsInput | $Enums.TraitType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitCreateManyInput = {
    id?: string
    personId: string
    type: $Enums.TraitType
    description: string
  }

  export type TraitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTraitTypeFieldUpdateOperationsInput | $Enums.TraitType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    type?: EnumTraitTypeFieldUpdateOperationsInput | $Enums.TraitType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PersonLoveCategoryListRelationFilter = {
    every?: PersonLoveCategoryWhereInput
    some?: PersonLoveCategoryWhereInput
    none?: PersonLoveCategoryWhereInput
  }

  export type SpecialDayListRelationFilter = {
    every?: SpecialDayWhereInput
    some?: SpecialDayWhereInput
    none?: SpecialDayWhereInput
  }

  export type RejectedGiftIdeaListRelationFilter = {
    every?: RejectedGiftIdeaWhereInput
    some?: RejectedGiftIdeaWhereInput
    none?: RejectedGiftIdeaWhereInput
  }

  export type TraitListRelationFilter = {
    every?: TraitWhereInput
    some?: TraitWhereInput
    none?: TraitWhereInput
  }

  export type PersonLoveCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RejectedGiftIdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TraitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    relationship?: SortOrder
    userId?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    relationship?: SortOrder
    userId?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    relationship?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SpecialDayScalarRelationFilter = {
    is?: SpecialDayWhereInput
    isNot?: SpecialDayWhereInput
  }

  export type GiftCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    website?: SortOrder
    done?: SortOrder
    specialDayId?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    website?: SortOrder
    done?: SortOrder
    specialDayId?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    website?: SortOrder
    done?: SortOrder
    specialDayId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LoveCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    catalyst?: SortOrder
    description?: SortOrder
  }

  export type LoveCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    catalyst?: SortOrder
    description?: SortOrder
  }

  export type LoveCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    catalyst?: SortOrder
    description?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type LoveCategoryScalarRelationFilter = {
    is?: LoveCategoryWhereInput
    isNot?: LoveCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonLoveCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    loveCategoryId?: SortOrder
    note?: SortOrder
  }

  export type PersonLoveCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    loveCategoryId?: SortOrder
    note?: SortOrder
  }

  export type PersonLoveCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    loveCategoryId?: SortOrder
    note?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GiftListRelationFilter = {
    every?: GiftWhereInput
    some?: GiftWhereInput
    none?: GiftWhereInput
  }

  export type GiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialDayCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    title?: SortOrder
    date?: SortOrder
  }

  export type SpecialDayMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    title?: SortOrder
    date?: SortOrder
  }

  export type SpecialDayMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    title?: SortOrder
    date?: SortOrder
  }

  export type RejectedGiftIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type RejectedGiftIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type RejectedGiftIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTraitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TraitType | EnumTraitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTraitTypeFilter<$PrismaModel> | $Enums.TraitType
  }

  export type TraitCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type TraitMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type TraitMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type EnumTraitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TraitType | EnumTraitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTraitTypeWithAggregatesFilter<$PrismaModel> | $Enums.TraitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTraitTypeFilter<$PrismaModel>
    _max?: NestedEnumTraitTypeFilter<$PrismaModel>
  }

  export type PersonCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput> | PersonCreateWithoutUserInput[] | PersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput | PersonCreateOrConnectWithoutUserInput[]
    createMany?: PersonCreateManyUserInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput> | PersonCreateWithoutUserInput[] | PersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput | PersonCreateOrConnectWithoutUserInput[]
    createMany?: PersonCreateManyUserInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput> | PersonCreateWithoutUserInput[] | PersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput | PersonCreateOrConnectWithoutUserInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutUserInput | PersonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonCreateManyUserInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutUserInput | PersonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutUserInput | PersonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput> | PersonCreateWithoutUserInput[] | PersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput | PersonCreateOrConnectWithoutUserInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutUserInput | PersonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonCreateManyUserInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutUserInput | PersonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutUserInput | PersonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPersonsInput = {
    create?: XOR<UserCreateWithoutPersonsInput, UserUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonsInput
    connect?: UserWhereUniqueInput
  }

  export type PersonLoveCategoryCreateNestedManyWithoutPersonInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutPersonInput, PersonLoveCategoryUncheckedCreateWithoutPersonInput> | PersonLoveCategoryCreateWithoutPersonInput[] | PersonLoveCategoryUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutPersonInput | PersonLoveCategoryCreateOrConnectWithoutPersonInput[]
    createMany?: PersonLoveCategoryCreateManyPersonInputEnvelope
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
  }

  export type SpecialDayCreateNestedManyWithoutPersonInput = {
    create?: XOR<SpecialDayCreateWithoutPersonInput, SpecialDayUncheckedCreateWithoutPersonInput> | SpecialDayCreateWithoutPersonInput[] | SpecialDayUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SpecialDayCreateOrConnectWithoutPersonInput | SpecialDayCreateOrConnectWithoutPersonInput[]
    createMany?: SpecialDayCreateManyPersonInputEnvelope
    connect?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
  }

  export type RejectedGiftIdeaCreateNestedManyWithoutPersonInput = {
    create?: XOR<RejectedGiftIdeaCreateWithoutPersonInput, RejectedGiftIdeaUncheckedCreateWithoutPersonInput> | RejectedGiftIdeaCreateWithoutPersonInput[] | RejectedGiftIdeaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RejectedGiftIdeaCreateOrConnectWithoutPersonInput | RejectedGiftIdeaCreateOrConnectWithoutPersonInput[]
    createMany?: RejectedGiftIdeaCreateManyPersonInputEnvelope
    connect?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
  }

  export type TraitCreateNestedManyWithoutPersonInput = {
    create?: XOR<TraitCreateWithoutPersonInput, TraitUncheckedCreateWithoutPersonInput> | TraitCreateWithoutPersonInput[] | TraitUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutPersonInput | TraitCreateOrConnectWithoutPersonInput[]
    createMany?: TraitCreateManyPersonInputEnvelope
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
  }

  export type PersonLoveCategoryUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutPersonInput, PersonLoveCategoryUncheckedCreateWithoutPersonInput> | PersonLoveCategoryCreateWithoutPersonInput[] | PersonLoveCategoryUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutPersonInput | PersonLoveCategoryCreateOrConnectWithoutPersonInput[]
    createMany?: PersonLoveCategoryCreateManyPersonInputEnvelope
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
  }

  export type SpecialDayUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<SpecialDayCreateWithoutPersonInput, SpecialDayUncheckedCreateWithoutPersonInput> | SpecialDayCreateWithoutPersonInput[] | SpecialDayUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SpecialDayCreateOrConnectWithoutPersonInput | SpecialDayCreateOrConnectWithoutPersonInput[]
    createMany?: SpecialDayCreateManyPersonInputEnvelope
    connect?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
  }

  export type RejectedGiftIdeaUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<RejectedGiftIdeaCreateWithoutPersonInput, RejectedGiftIdeaUncheckedCreateWithoutPersonInput> | RejectedGiftIdeaCreateWithoutPersonInput[] | RejectedGiftIdeaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RejectedGiftIdeaCreateOrConnectWithoutPersonInput | RejectedGiftIdeaCreateOrConnectWithoutPersonInput[]
    createMany?: RejectedGiftIdeaCreateManyPersonInputEnvelope
    connect?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
  }

  export type TraitUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<TraitCreateWithoutPersonInput, TraitUncheckedCreateWithoutPersonInput> | TraitCreateWithoutPersonInput[] | TraitUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutPersonInput | TraitCreateOrConnectWithoutPersonInput[]
    createMany?: TraitCreateManyPersonInputEnvelope
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<UserCreateWithoutPersonsInput, UserUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonsInput
    upsert?: UserUpsertWithoutPersonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonsInput, UserUpdateWithoutPersonsInput>, UserUncheckedUpdateWithoutPersonsInput>
  }

  export type PersonLoveCategoryUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutPersonInput, PersonLoveCategoryUncheckedCreateWithoutPersonInput> | PersonLoveCategoryCreateWithoutPersonInput[] | PersonLoveCategoryUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutPersonInput | PersonLoveCategoryCreateOrConnectWithoutPersonInput[]
    upsert?: PersonLoveCategoryUpsertWithWhereUniqueWithoutPersonInput | PersonLoveCategoryUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PersonLoveCategoryCreateManyPersonInputEnvelope
    set?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    disconnect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    delete?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    update?: PersonLoveCategoryUpdateWithWhereUniqueWithoutPersonInput | PersonLoveCategoryUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PersonLoveCategoryUpdateManyWithWhereWithoutPersonInput | PersonLoveCategoryUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PersonLoveCategoryScalarWhereInput | PersonLoveCategoryScalarWhereInput[]
  }

  export type SpecialDayUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SpecialDayCreateWithoutPersonInput, SpecialDayUncheckedCreateWithoutPersonInput> | SpecialDayCreateWithoutPersonInput[] | SpecialDayUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SpecialDayCreateOrConnectWithoutPersonInput | SpecialDayCreateOrConnectWithoutPersonInput[]
    upsert?: SpecialDayUpsertWithWhereUniqueWithoutPersonInput | SpecialDayUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SpecialDayCreateManyPersonInputEnvelope
    set?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    disconnect?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    delete?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    connect?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    update?: SpecialDayUpdateWithWhereUniqueWithoutPersonInput | SpecialDayUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SpecialDayUpdateManyWithWhereWithoutPersonInput | SpecialDayUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SpecialDayScalarWhereInput | SpecialDayScalarWhereInput[]
  }

  export type RejectedGiftIdeaUpdateManyWithoutPersonNestedInput = {
    create?: XOR<RejectedGiftIdeaCreateWithoutPersonInput, RejectedGiftIdeaUncheckedCreateWithoutPersonInput> | RejectedGiftIdeaCreateWithoutPersonInput[] | RejectedGiftIdeaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RejectedGiftIdeaCreateOrConnectWithoutPersonInput | RejectedGiftIdeaCreateOrConnectWithoutPersonInput[]
    upsert?: RejectedGiftIdeaUpsertWithWhereUniqueWithoutPersonInput | RejectedGiftIdeaUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: RejectedGiftIdeaCreateManyPersonInputEnvelope
    set?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    disconnect?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    delete?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    connect?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    update?: RejectedGiftIdeaUpdateWithWhereUniqueWithoutPersonInput | RejectedGiftIdeaUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: RejectedGiftIdeaUpdateManyWithWhereWithoutPersonInput | RejectedGiftIdeaUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: RejectedGiftIdeaScalarWhereInput | RejectedGiftIdeaScalarWhereInput[]
  }

  export type TraitUpdateManyWithoutPersonNestedInput = {
    create?: XOR<TraitCreateWithoutPersonInput, TraitUncheckedCreateWithoutPersonInput> | TraitCreateWithoutPersonInput[] | TraitUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutPersonInput | TraitCreateOrConnectWithoutPersonInput[]
    upsert?: TraitUpsertWithWhereUniqueWithoutPersonInput | TraitUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: TraitCreateManyPersonInputEnvelope
    set?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    disconnect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    delete?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    update?: TraitUpdateWithWhereUniqueWithoutPersonInput | TraitUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: TraitUpdateManyWithWhereWithoutPersonInput | TraitUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: TraitScalarWhereInput | TraitScalarWhereInput[]
  }

  export type PersonLoveCategoryUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutPersonInput, PersonLoveCategoryUncheckedCreateWithoutPersonInput> | PersonLoveCategoryCreateWithoutPersonInput[] | PersonLoveCategoryUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutPersonInput | PersonLoveCategoryCreateOrConnectWithoutPersonInput[]
    upsert?: PersonLoveCategoryUpsertWithWhereUniqueWithoutPersonInput | PersonLoveCategoryUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PersonLoveCategoryCreateManyPersonInputEnvelope
    set?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    disconnect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    delete?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    update?: PersonLoveCategoryUpdateWithWhereUniqueWithoutPersonInput | PersonLoveCategoryUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PersonLoveCategoryUpdateManyWithWhereWithoutPersonInput | PersonLoveCategoryUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PersonLoveCategoryScalarWhereInput | PersonLoveCategoryScalarWhereInput[]
  }

  export type SpecialDayUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SpecialDayCreateWithoutPersonInput, SpecialDayUncheckedCreateWithoutPersonInput> | SpecialDayCreateWithoutPersonInput[] | SpecialDayUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SpecialDayCreateOrConnectWithoutPersonInput | SpecialDayCreateOrConnectWithoutPersonInput[]
    upsert?: SpecialDayUpsertWithWhereUniqueWithoutPersonInput | SpecialDayUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SpecialDayCreateManyPersonInputEnvelope
    set?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    disconnect?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    delete?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    connect?: SpecialDayWhereUniqueInput | SpecialDayWhereUniqueInput[]
    update?: SpecialDayUpdateWithWhereUniqueWithoutPersonInput | SpecialDayUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SpecialDayUpdateManyWithWhereWithoutPersonInput | SpecialDayUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SpecialDayScalarWhereInput | SpecialDayScalarWhereInput[]
  }

  export type RejectedGiftIdeaUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<RejectedGiftIdeaCreateWithoutPersonInput, RejectedGiftIdeaUncheckedCreateWithoutPersonInput> | RejectedGiftIdeaCreateWithoutPersonInput[] | RejectedGiftIdeaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RejectedGiftIdeaCreateOrConnectWithoutPersonInput | RejectedGiftIdeaCreateOrConnectWithoutPersonInput[]
    upsert?: RejectedGiftIdeaUpsertWithWhereUniqueWithoutPersonInput | RejectedGiftIdeaUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: RejectedGiftIdeaCreateManyPersonInputEnvelope
    set?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    disconnect?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    delete?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    connect?: RejectedGiftIdeaWhereUniqueInput | RejectedGiftIdeaWhereUniqueInput[]
    update?: RejectedGiftIdeaUpdateWithWhereUniqueWithoutPersonInput | RejectedGiftIdeaUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: RejectedGiftIdeaUpdateManyWithWhereWithoutPersonInput | RejectedGiftIdeaUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: RejectedGiftIdeaScalarWhereInput | RejectedGiftIdeaScalarWhereInput[]
  }

  export type TraitUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<TraitCreateWithoutPersonInput, TraitUncheckedCreateWithoutPersonInput> | TraitCreateWithoutPersonInput[] | TraitUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutPersonInput | TraitCreateOrConnectWithoutPersonInput[]
    upsert?: TraitUpsertWithWhereUniqueWithoutPersonInput | TraitUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: TraitCreateManyPersonInputEnvelope
    set?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    disconnect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    delete?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    update?: TraitUpdateWithWhereUniqueWithoutPersonInput | TraitUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: TraitUpdateManyWithWhereWithoutPersonInput | TraitUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: TraitScalarWhereInput | TraitScalarWhereInput[]
  }

  export type SpecialDayCreateNestedOneWithoutGiftsInput = {
    create?: XOR<SpecialDayCreateWithoutGiftsInput, SpecialDayUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: SpecialDayCreateOrConnectWithoutGiftsInput
    connect?: SpecialDayWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SpecialDayUpdateOneRequiredWithoutGiftsNestedInput = {
    create?: XOR<SpecialDayCreateWithoutGiftsInput, SpecialDayUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: SpecialDayCreateOrConnectWithoutGiftsInput
    upsert?: SpecialDayUpsertWithoutGiftsInput
    connect?: SpecialDayWhereUniqueInput
    update?: XOR<XOR<SpecialDayUpdateToOneWithWhereWithoutGiftsInput, SpecialDayUpdateWithoutGiftsInput>, SpecialDayUncheckedUpdateWithoutGiftsInput>
  }

  export type PersonLoveCategoryCreateNestedManyWithoutLoveCategoryInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput> | PersonLoveCategoryCreateWithoutLoveCategoryInput[] | PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput | PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput[]
    createMany?: PersonLoveCategoryCreateManyLoveCategoryInputEnvelope
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
  }

  export type PersonLoveCategoryUncheckedCreateNestedManyWithoutLoveCategoryInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput> | PersonLoveCategoryCreateWithoutLoveCategoryInput[] | PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput | PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput[]
    createMany?: PersonLoveCategoryCreateManyLoveCategoryInputEnvelope
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
  }

  export type PersonLoveCategoryUpdateManyWithoutLoveCategoryNestedInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput> | PersonLoveCategoryCreateWithoutLoveCategoryInput[] | PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput | PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput[]
    upsert?: PersonLoveCategoryUpsertWithWhereUniqueWithoutLoveCategoryInput | PersonLoveCategoryUpsertWithWhereUniqueWithoutLoveCategoryInput[]
    createMany?: PersonLoveCategoryCreateManyLoveCategoryInputEnvelope
    set?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    disconnect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    delete?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    update?: PersonLoveCategoryUpdateWithWhereUniqueWithoutLoveCategoryInput | PersonLoveCategoryUpdateWithWhereUniqueWithoutLoveCategoryInput[]
    updateMany?: PersonLoveCategoryUpdateManyWithWhereWithoutLoveCategoryInput | PersonLoveCategoryUpdateManyWithWhereWithoutLoveCategoryInput[]
    deleteMany?: PersonLoveCategoryScalarWhereInput | PersonLoveCategoryScalarWhereInput[]
  }

  export type PersonLoveCategoryUncheckedUpdateManyWithoutLoveCategoryNestedInput = {
    create?: XOR<PersonLoveCategoryCreateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput> | PersonLoveCategoryCreateWithoutLoveCategoryInput[] | PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput[]
    connectOrCreate?: PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput | PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput[]
    upsert?: PersonLoveCategoryUpsertWithWhereUniqueWithoutLoveCategoryInput | PersonLoveCategoryUpsertWithWhereUniqueWithoutLoveCategoryInput[]
    createMany?: PersonLoveCategoryCreateManyLoveCategoryInputEnvelope
    set?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    disconnect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    delete?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    connect?: PersonLoveCategoryWhereUniqueInput | PersonLoveCategoryWhereUniqueInput[]
    update?: PersonLoveCategoryUpdateWithWhereUniqueWithoutLoveCategoryInput | PersonLoveCategoryUpdateWithWhereUniqueWithoutLoveCategoryInput[]
    updateMany?: PersonLoveCategoryUpdateManyWithWhereWithoutLoveCategoryInput | PersonLoveCategoryUpdateManyWithWhereWithoutLoveCategoryInput[]
    deleteMany?: PersonLoveCategoryScalarWhereInput | PersonLoveCategoryScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutLoveTypesInput = {
    create?: XOR<PersonCreateWithoutLoveTypesInput, PersonUncheckedCreateWithoutLoveTypesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutLoveTypesInput
    connect?: PersonWhereUniqueInput
  }

  export type LoveCategoryCreateNestedOneWithoutPersonsInput = {
    create?: XOR<LoveCategoryCreateWithoutPersonsInput, LoveCategoryUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: LoveCategoryCreateOrConnectWithoutPersonsInput
    connect?: LoveCategoryWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PersonUpdateOneRequiredWithoutLoveTypesNestedInput = {
    create?: XOR<PersonCreateWithoutLoveTypesInput, PersonUncheckedCreateWithoutLoveTypesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutLoveTypesInput
    upsert?: PersonUpsertWithoutLoveTypesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutLoveTypesInput, PersonUpdateWithoutLoveTypesInput>, PersonUncheckedUpdateWithoutLoveTypesInput>
  }

  export type LoveCategoryUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<LoveCategoryCreateWithoutPersonsInput, LoveCategoryUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: LoveCategoryCreateOrConnectWithoutPersonsInput
    upsert?: LoveCategoryUpsertWithoutPersonsInput
    connect?: LoveCategoryWhereUniqueInput
    update?: XOR<XOR<LoveCategoryUpdateToOneWithWhereWithoutPersonsInput, LoveCategoryUpdateWithoutPersonsInput>, LoveCategoryUncheckedUpdateWithoutPersonsInput>
  }

  export type PersonCreateNestedOneWithoutSpecialDaysInput = {
    create?: XOR<PersonCreateWithoutSpecialDaysInput, PersonUncheckedCreateWithoutSpecialDaysInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpecialDaysInput
    connect?: PersonWhereUniqueInput
  }

  export type GiftCreateNestedManyWithoutSpecialDayInput = {
    create?: XOR<GiftCreateWithoutSpecialDayInput, GiftUncheckedCreateWithoutSpecialDayInput> | GiftCreateWithoutSpecialDayInput[] | GiftUncheckedCreateWithoutSpecialDayInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSpecialDayInput | GiftCreateOrConnectWithoutSpecialDayInput[]
    createMany?: GiftCreateManySpecialDayInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type GiftUncheckedCreateNestedManyWithoutSpecialDayInput = {
    create?: XOR<GiftCreateWithoutSpecialDayInput, GiftUncheckedCreateWithoutSpecialDayInput> | GiftCreateWithoutSpecialDayInput[] | GiftUncheckedCreateWithoutSpecialDayInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSpecialDayInput | GiftCreateOrConnectWithoutSpecialDayInput[]
    createMany?: GiftCreateManySpecialDayInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type PersonUpdateOneRequiredWithoutSpecialDaysNestedInput = {
    create?: XOR<PersonCreateWithoutSpecialDaysInput, PersonUncheckedCreateWithoutSpecialDaysInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpecialDaysInput
    upsert?: PersonUpsertWithoutSpecialDaysInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSpecialDaysInput, PersonUpdateWithoutSpecialDaysInput>, PersonUncheckedUpdateWithoutSpecialDaysInput>
  }

  export type GiftUpdateManyWithoutSpecialDayNestedInput = {
    create?: XOR<GiftCreateWithoutSpecialDayInput, GiftUncheckedCreateWithoutSpecialDayInput> | GiftCreateWithoutSpecialDayInput[] | GiftUncheckedCreateWithoutSpecialDayInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSpecialDayInput | GiftCreateOrConnectWithoutSpecialDayInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutSpecialDayInput | GiftUpsertWithWhereUniqueWithoutSpecialDayInput[]
    createMany?: GiftCreateManySpecialDayInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutSpecialDayInput | GiftUpdateWithWhereUniqueWithoutSpecialDayInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutSpecialDayInput | GiftUpdateManyWithWhereWithoutSpecialDayInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type GiftUncheckedUpdateManyWithoutSpecialDayNestedInput = {
    create?: XOR<GiftCreateWithoutSpecialDayInput, GiftUncheckedCreateWithoutSpecialDayInput> | GiftCreateWithoutSpecialDayInput[] | GiftUncheckedCreateWithoutSpecialDayInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSpecialDayInput | GiftCreateOrConnectWithoutSpecialDayInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutSpecialDayInput | GiftUpsertWithWhereUniqueWithoutSpecialDayInput[]
    createMany?: GiftCreateManySpecialDayInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutSpecialDayInput | GiftUpdateWithWhereUniqueWithoutSpecialDayInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutSpecialDayInput | GiftUpdateManyWithWhereWithoutSpecialDayInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutRejectedGiftIdeasInput = {
    create?: XOR<PersonCreateWithoutRejectedGiftIdeasInput, PersonUncheckedCreateWithoutRejectedGiftIdeasInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRejectedGiftIdeasInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutRejectedGiftIdeasNestedInput = {
    create?: XOR<PersonCreateWithoutRejectedGiftIdeasInput, PersonUncheckedCreateWithoutRejectedGiftIdeasInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRejectedGiftIdeasInput
    upsert?: PersonUpsertWithoutRejectedGiftIdeasInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutRejectedGiftIdeasInput, PersonUpdateWithoutRejectedGiftIdeasInput>, PersonUncheckedUpdateWithoutRejectedGiftIdeasInput>
  }

  export type PersonCreateNestedOneWithoutTraitsInput = {
    create?: XOR<PersonCreateWithoutTraitsInput, PersonUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutTraitsInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumTraitTypeFieldUpdateOperationsInput = {
    set?: $Enums.TraitType
  }

  export type PersonUpdateOneRequiredWithoutTraitsNestedInput = {
    create?: XOR<PersonCreateWithoutTraitsInput, PersonUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutTraitsInput
    upsert?: PersonUpsertWithoutTraitsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutTraitsInput, PersonUpdateWithoutTraitsInput>, PersonUncheckedUpdateWithoutTraitsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTraitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TraitType | EnumTraitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTraitTypeFilter<$PrismaModel> | $Enums.TraitType
  }

  export type NestedEnumTraitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TraitType | EnumTraitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraitType[] | ListEnumTraitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTraitTypeWithAggregatesFilter<$PrismaModel> | $Enums.TraitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTraitTypeFilter<$PrismaModel>
    _max?: NestedEnumTraitTypeFilter<$PrismaModel>
  }

  export type PersonCreateWithoutUserInput = {
    id?: string
    name: string
    relationship: string
    loveTypes?: PersonLoveCategoryCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaCreateNestedManyWithoutPersonInput
    traits?: TraitCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    relationship: string
    loveTypes?: PersonLoveCategoryUncheckedCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayUncheckedCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedCreateNestedManyWithoutPersonInput
    traits?: TraitUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutUserInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type PersonCreateManyUserInputEnvelope = {
    data: PersonCreateManyUserInput | PersonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithWhereUniqueWithoutUserInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutUserInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
  }

  export type PersonUpdateManyWithWhereWithoutUserInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutUserInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    relationship?: StringFilter<"Person"> | string
    userId?: StringFilter<"Person"> | string
  }

  export type UserCreateWithoutPersonsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPersonsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPersonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonsInput, UserUncheckedCreateWithoutPersonsInput>
  }

  export type PersonLoveCategoryCreateWithoutPersonInput = {
    id?: string
    note?: string | null
    loveCategory: LoveCategoryCreateNestedOneWithoutPersonsInput
  }

  export type PersonLoveCategoryUncheckedCreateWithoutPersonInput = {
    id?: string
    loveCategoryId: string
    note?: string | null
  }

  export type PersonLoveCategoryCreateOrConnectWithoutPersonInput = {
    where: PersonLoveCategoryWhereUniqueInput
    create: XOR<PersonLoveCategoryCreateWithoutPersonInput, PersonLoveCategoryUncheckedCreateWithoutPersonInput>
  }

  export type PersonLoveCategoryCreateManyPersonInputEnvelope = {
    data: PersonLoveCategoryCreateManyPersonInput | PersonLoveCategoryCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type SpecialDayCreateWithoutPersonInput = {
    id?: string
    title: string
    date: Date | string
    gifts?: GiftCreateNestedManyWithoutSpecialDayInput
  }

  export type SpecialDayUncheckedCreateWithoutPersonInput = {
    id?: string
    title: string
    date: Date | string
    gifts?: GiftUncheckedCreateNestedManyWithoutSpecialDayInput
  }

  export type SpecialDayCreateOrConnectWithoutPersonInput = {
    where: SpecialDayWhereUniqueInput
    create: XOR<SpecialDayCreateWithoutPersonInput, SpecialDayUncheckedCreateWithoutPersonInput>
  }

  export type SpecialDayCreateManyPersonInputEnvelope = {
    data: SpecialDayCreateManyPersonInput | SpecialDayCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type RejectedGiftIdeaCreateWithoutPersonInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type RejectedGiftIdeaUncheckedCreateWithoutPersonInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type RejectedGiftIdeaCreateOrConnectWithoutPersonInput = {
    where: RejectedGiftIdeaWhereUniqueInput
    create: XOR<RejectedGiftIdeaCreateWithoutPersonInput, RejectedGiftIdeaUncheckedCreateWithoutPersonInput>
  }

  export type RejectedGiftIdeaCreateManyPersonInputEnvelope = {
    data: RejectedGiftIdeaCreateManyPersonInput | RejectedGiftIdeaCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type TraitCreateWithoutPersonInput = {
    id?: string
    type: $Enums.TraitType
    description: string
  }

  export type TraitUncheckedCreateWithoutPersonInput = {
    id?: string
    type: $Enums.TraitType
    description: string
  }

  export type TraitCreateOrConnectWithoutPersonInput = {
    where: TraitWhereUniqueInput
    create: XOR<TraitCreateWithoutPersonInput, TraitUncheckedCreateWithoutPersonInput>
  }

  export type TraitCreateManyPersonInputEnvelope = {
    data: TraitCreateManyPersonInput | TraitCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPersonsInput = {
    update: XOR<UserUpdateWithoutPersonsInput, UserUncheckedUpdateWithoutPersonsInput>
    create: XOR<UserCreateWithoutPersonsInput, UserUncheckedCreateWithoutPersonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonsInput, UserUncheckedUpdateWithoutPersonsInput>
  }

  export type UserUpdateWithoutPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonLoveCategoryUpsertWithWhereUniqueWithoutPersonInput = {
    where: PersonLoveCategoryWhereUniqueInput
    update: XOR<PersonLoveCategoryUpdateWithoutPersonInput, PersonLoveCategoryUncheckedUpdateWithoutPersonInput>
    create: XOR<PersonLoveCategoryCreateWithoutPersonInput, PersonLoveCategoryUncheckedCreateWithoutPersonInput>
  }

  export type PersonLoveCategoryUpdateWithWhereUniqueWithoutPersonInput = {
    where: PersonLoveCategoryWhereUniqueInput
    data: XOR<PersonLoveCategoryUpdateWithoutPersonInput, PersonLoveCategoryUncheckedUpdateWithoutPersonInput>
  }

  export type PersonLoveCategoryUpdateManyWithWhereWithoutPersonInput = {
    where: PersonLoveCategoryScalarWhereInput
    data: XOR<PersonLoveCategoryUpdateManyMutationInput, PersonLoveCategoryUncheckedUpdateManyWithoutPersonInput>
  }

  export type PersonLoveCategoryScalarWhereInput = {
    AND?: PersonLoveCategoryScalarWhereInput | PersonLoveCategoryScalarWhereInput[]
    OR?: PersonLoveCategoryScalarWhereInput[]
    NOT?: PersonLoveCategoryScalarWhereInput | PersonLoveCategoryScalarWhereInput[]
    id?: StringFilter<"PersonLoveCategory"> | string
    personId?: StringFilter<"PersonLoveCategory"> | string
    loveCategoryId?: StringFilter<"PersonLoveCategory"> | string
    note?: StringNullableFilter<"PersonLoveCategory"> | string | null
  }

  export type SpecialDayUpsertWithWhereUniqueWithoutPersonInput = {
    where: SpecialDayWhereUniqueInput
    update: XOR<SpecialDayUpdateWithoutPersonInput, SpecialDayUncheckedUpdateWithoutPersonInput>
    create: XOR<SpecialDayCreateWithoutPersonInput, SpecialDayUncheckedCreateWithoutPersonInput>
  }

  export type SpecialDayUpdateWithWhereUniqueWithoutPersonInput = {
    where: SpecialDayWhereUniqueInput
    data: XOR<SpecialDayUpdateWithoutPersonInput, SpecialDayUncheckedUpdateWithoutPersonInput>
  }

  export type SpecialDayUpdateManyWithWhereWithoutPersonInput = {
    where: SpecialDayScalarWhereInput
    data: XOR<SpecialDayUpdateManyMutationInput, SpecialDayUncheckedUpdateManyWithoutPersonInput>
  }

  export type SpecialDayScalarWhereInput = {
    AND?: SpecialDayScalarWhereInput | SpecialDayScalarWhereInput[]
    OR?: SpecialDayScalarWhereInput[]
    NOT?: SpecialDayScalarWhereInput | SpecialDayScalarWhereInput[]
    id?: StringFilter<"SpecialDay"> | string
    personId?: StringFilter<"SpecialDay"> | string
    title?: StringFilter<"SpecialDay"> | string
    date?: DateTimeFilter<"SpecialDay"> | Date | string
  }

  export type RejectedGiftIdeaUpsertWithWhereUniqueWithoutPersonInput = {
    where: RejectedGiftIdeaWhereUniqueInput
    update: XOR<RejectedGiftIdeaUpdateWithoutPersonInput, RejectedGiftIdeaUncheckedUpdateWithoutPersonInput>
    create: XOR<RejectedGiftIdeaCreateWithoutPersonInput, RejectedGiftIdeaUncheckedCreateWithoutPersonInput>
  }

  export type RejectedGiftIdeaUpdateWithWhereUniqueWithoutPersonInput = {
    where: RejectedGiftIdeaWhereUniqueInput
    data: XOR<RejectedGiftIdeaUpdateWithoutPersonInput, RejectedGiftIdeaUncheckedUpdateWithoutPersonInput>
  }

  export type RejectedGiftIdeaUpdateManyWithWhereWithoutPersonInput = {
    where: RejectedGiftIdeaScalarWhereInput
    data: XOR<RejectedGiftIdeaUpdateManyMutationInput, RejectedGiftIdeaUncheckedUpdateManyWithoutPersonInput>
  }

  export type RejectedGiftIdeaScalarWhereInput = {
    AND?: RejectedGiftIdeaScalarWhereInput | RejectedGiftIdeaScalarWhereInput[]
    OR?: RejectedGiftIdeaScalarWhereInput[]
    NOT?: RejectedGiftIdeaScalarWhereInput | RejectedGiftIdeaScalarWhereInput[]
    id?: StringFilter<"RejectedGiftIdea"> | string
    personId?: StringFilter<"RejectedGiftIdea"> | string
    content?: StringFilter<"RejectedGiftIdea"> | string
    createdAt?: DateTimeFilter<"RejectedGiftIdea"> | Date | string
  }

  export type TraitUpsertWithWhereUniqueWithoutPersonInput = {
    where: TraitWhereUniqueInput
    update: XOR<TraitUpdateWithoutPersonInput, TraitUncheckedUpdateWithoutPersonInput>
    create: XOR<TraitCreateWithoutPersonInput, TraitUncheckedCreateWithoutPersonInput>
  }

  export type TraitUpdateWithWhereUniqueWithoutPersonInput = {
    where: TraitWhereUniqueInput
    data: XOR<TraitUpdateWithoutPersonInput, TraitUncheckedUpdateWithoutPersonInput>
  }

  export type TraitUpdateManyWithWhereWithoutPersonInput = {
    where: TraitScalarWhereInput
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyWithoutPersonInput>
  }

  export type TraitScalarWhereInput = {
    AND?: TraitScalarWhereInput | TraitScalarWhereInput[]
    OR?: TraitScalarWhereInput[]
    NOT?: TraitScalarWhereInput | TraitScalarWhereInput[]
    id?: StringFilter<"Trait"> | string
    personId?: StringFilter<"Trait"> | string
    type?: EnumTraitTypeFilter<"Trait"> | $Enums.TraitType
    description?: StringFilter<"Trait"> | string
  }

  export type SpecialDayCreateWithoutGiftsInput = {
    id?: string
    title: string
    date: Date | string
    person: PersonCreateNestedOneWithoutSpecialDaysInput
  }

  export type SpecialDayUncheckedCreateWithoutGiftsInput = {
    id?: string
    personId: string
    title: string
    date: Date | string
  }

  export type SpecialDayCreateOrConnectWithoutGiftsInput = {
    where: SpecialDayWhereUniqueInput
    create: XOR<SpecialDayCreateWithoutGiftsInput, SpecialDayUncheckedCreateWithoutGiftsInput>
  }

  export type SpecialDayUpsertWithoutGiftsInput = {
    update: XOR<SpecialDayUpdateWithoutGiftsInput, SpecialDayUncheckedUpdateWithoutGiftsInput>
    create: XOR<SpecialDayCreateWithoutGiftsInput, SpecialDayUncheckedCreateWithoutGiftsInput>
    where?: SpecialDayWhereInput
  }

  export type SpecialDayUpdateToOneWithWhereWithoutGiftsInput = {
    where?: SpecialDayWhereInput
    data: XOR<SpecialDayUpdateWithoutGiftsInput, SpecialDayUncheckedUpdateWithoutGiftsInput>
  }

  export type SpecialDayUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSpecialDaysNestedInput
  }

  export type SpecialDayUncheckedUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonLoveCategoryCreateWithoutLoveCategoryInput = {
    id?: string
    note?: string | null
    person: PersonCreateNestedOneWithoutLoveTypesInput
  }

  export type PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput = {
    id?: string
    personId: string
    note?: string | null
  }

  export type PersonLoveCategoryCreateOrConnectWithoutLoveCategoryInput = {
    where: PersonLoveCategoryWhereUniqueInput
    create: XOR<PersonLoveCategoryCreateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput>
  }

  export type PersonLoveCategoryCreateManyLoveCategoryInputEnvelope = {
    data: PersonLoveCategoryCreateManyLoveCategoryInput | PersonLoveCategoryCreateManyLoveCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PersonLoveCategoryUpsertWithWhereUniqueWithoutLoveCategoryInput = {
    where: PersonLoveCategoryWhereUniqueInput
    update: XOR<PersonLoveCategoryUpdateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedUpdateWithoutLoveCategoryInput>
    create: XOR<PersonLoveCategoryCreateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedCreateWithoutLoveCategoryInput>
  }

  export type PersonLoveCategoryUpdateWithWhereUniqueWithoutLoveCategoryInput = {
    where: PersonLoveCategoryWhereUniqueInput
    data: XOR<PersonLoveCategoryUpdateWithoutLoveCategoryInput, PersonLoveCategoryUncheckedUpdateWithoutLoveCategoryInput>
  }

  export type PersonLoveCategoryUpdateManyWithWhereWithoutLoveCategoryInput = {
    where: PersonLoveCategoryScalarWhereInput
    data: XOR<PersonLoveCategoryUpdateManyMutationInput, PersonLoveCategoryUncheckedUpdateManyWithoutLoveCategoryInput>
  }

  export type PersonCreateWithoutLoveTypesInput = {
    id?: string
    name: string
    relationship: string
    user: UserCreateNestedOneWithoutPersonsInput
    specialDays?: SpecialDayCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaCreateNestedManyWithoutPersonInput
    traits?: TraitCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutLoveTypesInput = {
    id?: string
    name: string
    relationship: string
    userId: string
    specialDays?: SpecialDayUncheckedCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedCreateNestedManyWithoutPersonInput
    traits?: TraitUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutLoveTypesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutLoveTypesInput, PersonUncheckedCreateWithoutLoveTypesInput>
  }

  export type LoveCategoryCreateWithoutPersonsInput = {
    id?: string
    name: string
    catalyst: string
    description: string
  }

  export type LoveCategoryUncheckedCreateWithoutPersonsInput = {
    id?: string
    name: string
    catalyst: string
    description: string
  }

  export type LoveCategoryCreateOrConnectWithoutPersonsInput = {
    where: LoveCategoryWhereUniqueInput
    create: XOR<LoveCategoryCreateWithoutPersonsInput, LoveCategoryUncheckedCreateWithoutPersonsInput>
  }

  export type PersonUpsertWithoutLoveTypesInput = {
    update: XOR<PersonUpdateWithoutLoveTypesInput, PersonUncheckedUpdateWithoutLoveTypesInput>
    create: XOR<PersonCreateWithoutLoveTypesInput, PersonUncheckedCreateWithoutLoveTypesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutLoveTypesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutLoveTypesInput, PersonUncheckedUpdateWithoutLoveTypesInput>
  }

  export type PersonUpdateWithoutLoveTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPersonsNestedInput
    specialDays?: SpecialDayUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUpdateManyWithoutPersonNestedInput
    traits?: TraitUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutLoveTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialDays?: SpecialDayUncheckedUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedUpdateManyWithoutPersonNestedInput
    traits?: TraitUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type LoveCategoryUpsertWithoutPersonsInput = {
    update: XOR<LoveCategoryUpdateWithoutPersonsInput, LoveCategoryUncheckedUpdateWithoutPersonsInput>
    create: XOR<LoveCategoryCreateWithoutPersonsInput, LoveCategoryUncheckedCreateWithoutPersonsInput>
    where?: LoveCategoryWhereInput
  }

  export type LoveCategoryUpdateToOneWithWhereWithoutPersonsInput = {
    where?: LoveCategoryWhereInput
    data: XOR<LoveCategoryUpdateWithoutPersonsInput, LoveCategoryUncheckedUpdateWithoutPersonsInput>
  }

  export type LoveCategoryUpdateWithoutPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    catalyst?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LoveCategoryUncheckedUpdateWithoutPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    catalyst?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateWithoutSpecialDaysInput = {
    id?: string
    name: string
    relationship: string
    user: UserCreateNestedOneWithoutPersonsInput
    loveTypes?: PersonLoveCategoryCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaCreateNestedManyWithoutPersonInput
    traits?: TraitCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutSpecialDaysInput = {
    id?: string
    name: string
    relationship: string
    userId: string
    loveTypes?: PersonLoveCategoryUncheckedCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedCreateNestedManyWithoutPersonInput
    traits?: TraitUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutSpecialDaysInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSpecialDaysInput, PersonUncheckedCreateWithoutSpecialDaysInput>
  }

  export type GiftCreateWithoutSpecialDayInput = {
    id?: string
    title: string
    website: string
    done?: boolean
    createdAt?: Date | string
  }

  export type GiftUncheckedCreateWithoutSpecialDayInput = {
    id?: string
    title: string
    website: string
    done?: boolean
    createdAt?: Date | string
  }

  export type GiftCreateOrConnectWithoutSpecialDayInput = {
    where: GiftWhereUniqueInput
    create: XOR<GiftCreateWithoutSpecialDayInput, GiftUncheckedCreateWithoutSpecialDayInput>
  }

  export type GiftCreateManySpecialDayInputEnvelope = {
    data: GiftCreateManySpecialDayInput | GiftCreateManySpecialDayInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutSpecialDaysInput = {
    update: XOR<PersonUpdateWithoutSpecialDaysInput, PersonUncheckedUpdateWithoutSpecialDaysInput>
    create: XOR<PersonCreateWithoutSpecialDaysInput, PersonUncheckedCreateWithoutSpecialDaysInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSpecialDaysInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSpecialDaysInput, PersonUncheckedUpdateWithoutSpecialDaysInput>
  }

  export type PersonUpdateWithoutSpecialDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPersonsNestedInput
    loveTypes?: PersonLoveCategoryUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUpdateManyWithoutPersonNestedInput
    traits?: TraitUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutSpecialDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loveTypes?: PersonLoveCategoryUncheckedUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedUpdateManyWithoutPersonNestedInput
    traits?: TraitUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type GiftUpsertWithWhereUniqueWithoutSpecialDayInput = {
    where: GiftWhereUniqueInput
    update: XOR<GiftUpdateWithoutSpecialDayInput, GiftUncheckedUpdateWithoutSpecialDayInput>
    create: XOR<GiftCreateWithoutSpecialDayInput, GiftUncheckedCreateWithoutSpecialDayInput>
  }

  export type GiftUpdateWithWhereUniqueWithoutSpecialDayInput = {
    where: GiftWhereUniqueInput
    data: XOR<GiftUpdateWithoutSpecialDayInput, GiftUncheckedUpdateWithoutSpecialDayInput>
  }

  export type GiftUpdateManyWithWhereWithoutSpecialDayInput = {
    where: GiftScalarWhereInput
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyWithoutSpecialDayInput>
  }

  export type GiftScalarWhereInput = {
    AND?: GiftScalarWhereInput | GiftScalarWhereInput[]
    OR?: GiftScalarWhereInput[]
    NOT?: GiftScalarWhereInput | GiftScalarWhereInput[]
    id?: StringFilter<"Gift"> | string
    title?: StringFilter<"Gift"> | string
    website?: StringFilter<"Gift"> | string
    done?: BoolFilter<"Gift"> | boolean
    specialDayId?: StringFilter<"Gift"> | string
    createdAt?: DateTimeFilter<"Gift"> | Date | string
  }

  export type PersonCreateWithoutRejectedGiftIdeasInput = {
    id?: string
    name: string
    relationship: string
    user: UserCreateNestedOneWithoutPersonsInput
    loveTypes?: PersonLoveCategoryCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayCreateNestedManyWithoutPersonInput
    traits?: TraitCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutRejectedGiftIdeasInput = {
    id?: string
    name: string
    relationship: string
    userId: string
    loveTypes?: PersonLoveCategoryUncheckedCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayUncheckedCreateNestedManyWithoutPersonInput
    traits?: TraitUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutRejectedGiftIdeasInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutRejectedGiftIdeasInput, PersonUncheckedCreateWithoutRejectedGiftIdeasInput>
  }

  export type PersonUpsertWithoutRejectedGiftIdeasInput = {
    update: XOR<PersonUpdateWithoutRejectedGiftIdeasInput, PersonUncheckedUpdateWithoutRejectedGiftIdeasInput>
    create: XOR<PersonCreateWithoutRejectedGiftIdeasInput, PersonUncheckedCreateWithoutRejectedGiftIdeasInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutRejectedGiftIdeasInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutRejectedGiftIdeasInput, PersonUncheckedUpdateWithoutRejectedGiftIdeasInput>
  }

  export type PersonUpdateWithoutRejectedGiftIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPersonsNestedInput
    loveTypes?: PersonLoveCategoryUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUpdateManyWithoutPersonNestedInput
    traits?: TraitUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutRejectedGiftIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loveTypes?: PersonLoveCategoryUncheckedUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUncheckedUpdateManyWithoutPersonNestedInput
    traits?: TraitUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutTraitsInput = {
    id?: string
    name: string
    relationship: string
    user: UserCreateNestedOneWithoutPersonsInput
    loveTypes?: PersonLoveCategoryCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutTraitsInput = {
    id?: string
    name: string
    relationship: string
    userId: string
    loveTypes?: PersonLoveCategoryUncheckedCreateNestedManyWithoutPersonInput
    specialDays?: SpecialDayUncheckedCreateNestedManyWithoutPersonInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutTraitsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutTraitsInput, PersonUncheckedCreateWithoutTraitsInput>
  }

  export type PersonUpsertWithoutTraitsInput = {
    update: XOR<PersonUpdateWithoutTraitsInput, PersonUncheckedUpdateWithoutTraitsInput>
    create: XOR<PersonCreateWithoutTraitsInput, PersonUncheckedCreateWithoutTraitsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutTraitsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutTraitsInput, PersonUncheckedUpdateWithoutTraitsInput>
  }

  export type PersonUpdateWithoutTraitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPersonsNestedInput
    loveTypes?: PersonLoveCategoryUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutTraitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loveTypes?: PersonLoveCategoryUncheckedUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUncheckedUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyUserInput = {
    id?: string
    name: string
    relationship: string
  }

  export type PersonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    loveTypes?: PersonLoveCategoryUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUpdateManyWithoutPersonNestedInput
    traits?: TraitUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    loveTypes?: PersonLoveCategoryUncheckedUpdateManyWithoutPersonNestedInput
    specialDays?: SpecialDayUncheckedUpdateManyWithoutPersonNestedInput
    rejectedGiftIdeas?: RejectedGiftIdeaUncheckedUpdateManyWithoutPersonNestedInput
    traits?: TraitUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type PersonLoveCategoryCreateManyPersonInput = {
    id?: string
    loveCategoryId: string
    note?: string | null
  }

  export type SpecialDayCreateManyPersonInput = {
    id?: string
    title: string
    date: Date | string
  }

  export type RejectedGiftIdeaCreateManyPersonInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type TraitCreateManyPersonInput = {
    id?: string
    type: $Enums.TraitType
    description: string
  }

  export type PersonLoveCategoryUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    loveCategory?: LoveCategoryUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonLoveCategoryUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    loveCategoryId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonLoveCategoryUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    loveCategoryId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpecialDayUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: GiftUpdateManyWithoutSpecialDayNestedInput
  }

  export type SpecialDayUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: GiftUncheckedUpdateManyWithoutSpecialDayNestedInput
  }

  export type SpecialDayUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedGiftIdeaUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedGiftIdeaUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedGiftIdeaUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraitUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTraitTypeFieldUpdateOperationsInput | $Enums.TraitType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTraitTypeFieldUpdateOperationsInput | $Enums.TraitType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTraitTypeFieldUpdateOperationsInput | $Enums.TraitType
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PersonLoveCategoryCreateManyLoveCategoryInput = {
    id?: string
    personId: string
    note?: string | null
  }

  export type PersonLoveCategoryUpdateWithoutLoveCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    person?: PersonUpdateOneRequiredWithoutLoveTypesNestedInput
  }

  export type PersonLoveCategoryUncheckedUpdateWithoutLoveCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonLoveCategoryUncheckedUpdateManyWithoutLoveCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiftCreateManySpecialDayInput = {
    id?: string
    title: string
    website: string
    done?: boolean
    createdAt?: Date | string
  }

  export type GiftUpdateWithoutSpecialDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateWithoutSpecialDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateManyWithoutSpecialDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}