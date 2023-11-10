import React from 'react';
import PhotoList from './PhotoList';

const AlbumList = () => {
  const albums = [
    {
      id: 1,
      title: 'Album 1',
      photos: [
        {
          id: 1,
          title: 'first Image',
          url: 'https://static.bandainamcoent.eu/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg',
        },
        {
          id: 2,
          title: 'Second Image',
          url: 'https://cdn.vox-cdn.com/thumbor/OaLG8uG4V8Kgb4mKomOktrUgDD0=/0x50:1600x850/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24762952/Jujutsu_Kaisen_season_2_01.jpg',
        },
        {
          id: 3,
          title: 'Third Image',
          url: 'https://i.pinimg.com/originals/53/9c/9e/539c9eb437b29d132b0af5a42f1bb1d4.jpg',
        },
        {
          id: 3,
          title: 'Third Image',
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae1b0b13-5877-46dd-b9e6-3c60da271fbf/dfwtqcb-a6967d3f-2ca6-4e54-988c-631cdfad237e.jpg/v1/fill/w_1280,h_720,q_75,strp/demon_slayer_wallpapers___top_20_demon_slayer_back_by_ifvuojcjkballs_dfwtqcb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWUxYjBiMTMtNTg3Ny00NmRkLWI5ZTYtM2M2MGRhMjcxZmJmXC9kZnd0cWNiLWE2OTY3ZDNmLTJjYTYtNGU1NC05ODhjLTYzMWNkZmFkMjM3ZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.r5ubv17OeufV08PDVeNSGinD3sV778pq9tsXMY2pWvg',
        },
      ],
    },
  ];

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>
          <h4>{album.title}</h4>
          <PhotoList photos={album.photos} />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
