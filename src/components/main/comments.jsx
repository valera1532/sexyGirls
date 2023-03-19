import React from 'react';
import CommentsCodeItem from './comments-code-item';
import imgB from '../../img/main/comments/imgB.png';
import imgI from '../../img/main/comments/imgI.png';
import imgList from '../../img/main/comments/imgList.png';
import imgImage from '../../img/main/comments/imgImage.png';
import imgLink from '../../img/main/comments/imgLink.png';
import imgQuote from '../../img/main/comments/imgQuote.png';
import imgElipse from '../../img/main/comments/imgElipse.png';
import imgCode from '../../img/main/comments/imgCode.png';
import imgAdd from '../../img/main/comments/imgAdd.png';

const Comments = () => {
    return (
        <div className='comments'>
            <div className="comments__title">
                0 комментариев
            </div>
            <div className="comments__block">
                <div className="comments-code__elements">
                    <CommentsCodeItem src={imgB} />
                    <CommentsCodeItem src={imgI} />
                    <CommentsCodeItem src={imgList} />
                    <CommentsCodeItem src={imgImage} />
                    <CommentsCodeItem src={imgLink} />
                    <CommentsCodeItem src={imgQuote} />
                    <CommentsCodeItem src={imgElipse} />
                    <CommentsCodeItem src={imgCode} />
                    <CommentsCodeItem src={imgAdd} />
                </div>
                <div className="comments__textarea">
                    <textarea name="" id="" placeholder='Введите текст комментария' >
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default Comments;
