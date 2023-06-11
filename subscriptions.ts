/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory(
    $filter: ModelSubscriptionAlbumCategoryFilterInput
  ) {
    onCreateAlbumCategory(filter: $filter) {
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
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory(
    $filter: ModelSubscriptionAlbumCategoryFilterInput
  ) {
    onUpdateAlbumCategory(filter: $filter) {
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
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory(
    $filter: ModelSubscriptionAlbumCategoryFilterInput
  ) {
    onDeleteAlbumCategory(filter: $filter) {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onCreateAlbum(filter: $filter) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onUpdateAlbum(filter: $filter) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onDeleteAlbum(filter: $filter) {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
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
