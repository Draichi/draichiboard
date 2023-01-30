declare module '*/contributionsCollection.gql' {
  import { DocumentNode } from 'graphql'

  const defaultDocument: DocumentNode

  export default defaultDocument
}

declare module '*/query.gql' {
  import { DocumentNode } from 'graphql'

  const defaultDocument: DocumentNode

  export default defaultDocument
}

declare module '*.glb' {
  const src: string

  export default src
}

declare module '*.gltf' {
  const src: string

  export default src
}

declare module '*.gql' {
  const content: any

  export default content
}
