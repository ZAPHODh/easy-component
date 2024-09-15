const cssComponent = `/* Estilos para Wrapper */
.wrapper {
    position: relative;
}

/* Estilos para Tooltip */
.tooltip {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 8px;
    border-radius: 4px;
    position: absolute;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
}

/* Posições específicas para o Tooltip */
.tooltip.top {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
}

.tooltip.right {
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
}

.tooltip.bottom {
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}

.tooltip.left {
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
}
`
