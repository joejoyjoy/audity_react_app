import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './renderCarouselItem.scss';
import GrayPerson from 'assets/img/webp/profile-placeholder-160x160.webp'
import { TfiPlus } from "react-icons/tfi";
import { Modal } from 'antd';
import ModalPlaylist from 'views/UI/ModalAntdPlaylistCreate/ModalAntdPlaylistCreate';
import RenderAlbum from 'views/components/basic/musicPageComponent/albumsSlider/renderAlbum/RenderAlbum';
import RenderArtist from 'views/components/basic/musicPageComponent/artistsSlider/renderArtist/RenderArtist';
import RenderPlaylist from 'views/components/basic/musicPageComponent/dailyListsSlider/renderPlaylist/RenderPlaylist';

export default function RenderCarouselItem({ list, type }) {
  const { t } = useTranslation();
  const { _id, name } = list;
  const [open, setOpen] = useState(false);
  const [modal, contextHolder] = Modal.useModal();

  const hideModal = () => {
    setOpen(false);
  };

  const confirm = () => {
    modal.confirm({
      centered: true,
      closable: true,
      icon: 0,
      width: 800,
      content: <ModalPlaylist />,
      okText: 'CREATE',
    });
  };

  if (_id === "AddOnePlaylist") {
    return (
      <>
        <Link to={"#"} className='render-carousel-add-one-playlist'>
          <div className='render-carousel-add-one-playlist__background' onClick={confirm}>
            <TfiPlus size='35px' color='#72727d' />
          </div>
          <p className='render-carousel-add-one-playlist__details'>{t("library_create_playlist_text")}</p>
        </Link>
        <Modal title="Basic Modal" open={open} onOk={hideModal} onCancel={hideModal} />
        {contextHolder}
      </>
    )
  }

  if (_id === "AddOneArtist") {
    return (
      <Link to={"/artists"} className='render-carousel-add-one-artist'>
        <div className='render-carousel-add-one-artist__background'>
          <TfiPlus size='35px' color='#72727d' />
        </div>
        <p className='render-carousel-add-one-artist__details'>{t("library_create_artist_text")}</p>
      </Link>
    )
  }

  if (type === "playlists") {
    return <RenderPlaylist playlist={list} />
  }

  if (type === "albums") {
    return <RenderAlbum album={list} />
  }

  if (type === "artists") {
    return <RenderArtist artist={list} />
  }

  return (
    <div className='render-carousel-item'>
      <div className='render-carousel-item__thumbnail'>
        <img
          src={GrayPerson}
          alt="404 Category not found"
          className='render-carousel-item__thumbnail--img' />
      </div>
      <p className='render-carousel-item__description'>404 Category not found</p>
    </div>
  )
}
