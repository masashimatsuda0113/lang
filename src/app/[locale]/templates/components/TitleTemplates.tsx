import TemplateBlock from './TemplateBlock';
import styles from './TemplateBlock.module.scss';
const titleTemplates = [
    { className: 'sectionTitle', label: 'sectionTitle' },
    { className: 'sectionTitle02', label: 'sectionTitle02' },
    { className: 'sectionTitle06', label: 'sectionTitle06' },
    { className: 'sectionTitle07', label: 'sectionTitle07' },
    { className: 'sectionTitle08', label: 'sectionTitle08' }
];

export default function TitleTemplates() {
    return (
        <div>
            <h2 className={styles.title}>タイトルテンプレート</h2>
            {titleTemplates.map((item) => (
                <TemplateBlock key={item.className} htmlTag="h2" className={item.className} label={item.label} />
            ))}
        </div>
    );
}
