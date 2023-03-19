import React from 'react';
import shareImg from '../../img/main/player/share.svg'
import Comments from './comments';

const Description = (props) => {
    return (
        <div className='description'>
            <div className="description__title">
                {props.video.title}
            </div>
            <div className="description__body">
                <div className="description__user">
                    <div className="description__avatar">
                        <img src={props.video.srcAvatar} alt="Avatar" />
                    </div>
                    <div className="description__info">
                        <div className="description__name">
                            {props.video.nameUser}
                        </div>
                        <div className="description__subscribers">
                            {props.video.subscribers} Подписчиков
                        </div>
                    </div>
                    <button className="description__subscribe">
                        Подписаться
                    </button>
                </div>
                <div className="description__content">
                    <button className="description__like">
                        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.07077 2.41406C5.4933 2.41406 2.01025 4.23698 2.01025 9.28828C2.01025 14.263 10.2633 21.5547 15.4998 26.5859C20.7396 21.5547 28.9894 14.263 28.9894 9.28828C28.9894 4.23698 25.5091 2.41406 21.9356 2.41406C19.1457 2.41406 17.0174 4.57878 15.4998 6.85578C13.9755 4.56802 11.854 2.41406 9.07077 2.41406Z" stroke="#B570EB" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        {props.video.likes}
                    </button>
                    <button className="description__share">
                        <img src={shareImg} alt="Share" />
                        Поделиться
                    </button>
                </div>
            </div>
            <div className="description__description">
                <div className="description__date">
                    9 апр. 2022 г.
                </div>
                Если долго смотреть на эту непримечательную глиняную куклу, она исчезнет, а на её месте возникнет фантом полуобнажённой жуткой женщины. Её образ вызовет у вас неконтролируемую панику, ночные кошмары и сведёт с ума. Почему? Всё просто – это аномальный объект SCP-136 – Обнажённая кукла.
            </div>
            <Comments />
        </div>
    );
}

export default Description;
