import './Introduction.css';
import { noTextLogo } from '../../assets/images/logos';
import { INTRODUCTION_CONTENT } from '../../constants';

export const Introduction = ({scrollToRef}) => {
    return (
        <div className="intro-section">
            <div className="intro__content">
                <div className="intro__title">{INTRODUCTION_CONTENT.title}</div>
                <div className="intro__desc">{INTRODUCTION_CONTENT.desc}</div>
                <div className="intro__more" onClick={scrollToRef}>{INTRODUCTION_CONTENT.more}</div>
            </div>
            <div className="intro__logo">
                <div className='intro__blur item-1'>
                    <div className="intro__blur__item sub-item-1">
                        <div className="intro__blur__item sub-item-2">
                            <div className="intro__blur__item sub-item-3">
                            </div>
                        </div>
                    </div>
                </div>

                <div className='intro__blur item-2'>
                    <div className="intro__blur__item sub-item-1">
                        <div className="intro__blur__item sub-item-2">
                            <div className="intro__blur__item sub-item-3">
                            </div>
                        </div>
                    </div>
                </div>

                <img className="intro__img backgr" src={noTextLogo} alt="Logo ET Club" />
                <img className="intro__img" src={noTextLogo} alt="Logo ET Club" />
            </div>
        </div>
    )
}