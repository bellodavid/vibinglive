/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbumCategory = /* GraphQL */ `
  query GetAlbumCategory($id: ID!) {
    getAlbumCategory(id: $id) {
      id
      title
      albums {
        items {
          id
          name
          by
          imageUri
          artistHeadLine
          createdAt
          updatedAt
          albumCategoryAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbumCategories = /* GraphQL */ `
  query ListAlbumCategories(
    $filter: ModelAlbumCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      by
      imageUri
      artistHeadLine
      category {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      songs {
        items {
          id
          imageUri
          uri
          artist
          content
          createdAt
          updatedAt
          albumSongsId
        }
        nextToken
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        by
        imageUri
        artistHeadLine
        category {
          id
          title
          createdAt
          updatedAt
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      imageUri
      uri
      artist
      album {
        id
        name
        by
        imageUri
        artistHeadLine
        category {
          id
          title
          createdAt
          updatedAt
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
      }
      content
      createdAt
      updatedAt
      albumSongsId
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUri
        uri
        artist
        album {
          id
          name
          by
          imageUri
          artistHeadLine
          createdAt
          updatedAt
          albumCategoryAlbumsId
        }
        content
        createdAt
        updatedAt
        albumSongsId
      }
      nextToken
    }
  }
`;
