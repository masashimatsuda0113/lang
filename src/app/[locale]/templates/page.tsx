import TitleTemplates from './components/TitleTemplates';
import ButtonTemplates from './components/ButtonTemplates';
import LayoutTemplates from './components/LayoutTemplates';

export default function TemplateShowcasePage() {
    return (
        <main>
            <h1 style={{ textAlign: 'center' }}>デザインテンプレート集</h1>
            <TitleTemplates />
            <ButtonTemplates />
            <LayoutTemplates />
        </main>
    );
}
