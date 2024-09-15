const cssComponent = `import { useState, ReactNode } from 'react';
import './styles.css';  // Importa os estilos CSS

// Definindo o tipo das props
type ToolTipProps = {
    position: 'top' | 'right' | 'bottom' | 'left';
    text: string;
    children: ReactNode;
};

export const ToolTip = ({ position, text, children }: ToolTipProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={\`tooltip \${position} tooltip-visible\`}>
                    {text}
                </div>
            )}
        </div>
    );
};
`
export default cssComponent
