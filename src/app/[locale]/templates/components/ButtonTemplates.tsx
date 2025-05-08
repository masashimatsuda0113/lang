import TemplateBlock from './TemplateBlock';
import styles from './TemplateBlock.module.scss';
const buttonTemplates = [
    { className: 'btnGradientSlide', label: 'グラデーションスライドボタン' },
    { className: 'btnBorderAnimate', label: 'ボーダーラインアニメーションボタン' },
    { className: 'btnShadowJump', label: 'シャドウジャンプボタン' },
    { className: 'btnGlass', label: 'ガラス風ブラー透明ボタン' },
    { className: 'btnIcon', label: 'アイコンとテキストの二段組ボタン' },
    { className: 'btnUnderline', label: 'アンダーラインスライドボタン' },
    { className: 'btnNeumorph', label: 'ニューモーフィズムボタン' },
    { className: 'btnPulse', label: 'パルスアニメーションボタン' },
    { className: 'btnGradientBorder', label: 'グラデーションボーダーボタン' }
];

export default function ButtonTemplates() {
    return (
        <div>
            <h2 className={styles.title}>ボタンテンプレート</h2>
            {buttonTemplates.map((item) => (
                <TemplateBlock key={item.className} htmlTag="Link" className={item.className} label={item.label} />
            ))}
        </div>
    );
}
