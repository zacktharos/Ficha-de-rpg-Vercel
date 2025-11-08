import React, { useState, useEffect } from 'react';
import type { Ficha } from '../types';
import { racasData, vantagensData, desvantagensData } from '../constants';

interface RacasPanelProps {
    ficha: Ficha;
    pontosVantagemDisponiveis: number;
    onUpdate: <K extends keyof Ficha>(key: K, value: Ficha[K]) => void;
    onClose: () => void;
}

export const RacasPanel: React.FC<RacasPanelProps> = ({ ficha, pontosVantagemDisponiveis, onUpdate, onClose }) => {
    const [tempRaca, setTempRaca] = useState<string | null>(ficha.racaSelecionada);
    const [showSavedMessage, setShowSavedMessage] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    useEffect(() => {
        setTempRaca(ficha.racaSelecionada);
    }, [ficha.racaSelecionada]);

    const calcularPHRestante = (selectedRaca: string | null) => {
        let ph = ficha.pontosVantagemTotais;

        ficha.vantagens.forEach(v => ph -= (vantagensData.find(vd => vd.nome === v)?.custo || 0));
        ficha.desvantagens.forEach(d => ph += (desvantagensData.find(dd => dd.nome === d)?.ganho || 0));
        
        if(ficha.racaSelecionada){
             ph += racasData.find(r => r.nome === ficha.racaSelecionada)?.custo || 0;
        }
        
        if(selectedRaca) {
            ph -= racasData.find(r => r.nome === selectedRaca)?.custo || 0;
        }

        return ph;
    };
    
    const phRestante = calcularPHRestante(tempRaca);

    const handleSelectRaca = (nome: string, custo: number) => {
        if (ficha.racaSelecionada) {
            alert("Uma raça já foi selecionada. Para alterar, use a opção 'Excluir...' na ficha.");
            return;
        }

        if (tempRaca === nome) {
            setTempRaca(null);
        } else if (calcularPHRestante(nome) >= 0) {
            setTempRaca(nome);
        } else {
            alert("Pontos de Vantagem insuficientes para selecionar esta raça!");
        }
    };
    
    const handleSave = () => {
        onUpdate('racaSelecionada', tempRaca);
        setShowSavedMessage(true);
        setTimeout(() => setShowSavedMessage(false), 2000);
    };
    
    const componentStyle = { backgroundColor: 'var(--component-bg-color)' };
    const isRaceLocked = !!ficha.racaSelecionada;

    return (
        <div className={`fixed inset-0 bg-black/80 z-40 flex flex-col p-4 ${isClosing ? 'modal-exit' : 'modal-enter'}`}>
            <div className="bg-stone-900 rounded-lg p-4 flex-grow flex flex-col border border-stone-700 relative min-h-0">
                <button onClick={handleClose} className="absolute top-4 right-4 text-3xl font-bold text-yellow-500 hover:text-yellow-400 z-10">&times;</button>
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-medieval">Raças</h2>
                    <p>Pontos Restantes Após Seleção: <span className={`font-bold text-lg ${phRestante < 0 ? 'text-red-500' : 'text-green-400'}`}>{phRestante}</span></p>
                    <div className="mt-2 flex justify-center items-center gap-4">
                         <button 
                            onClick={handleSave} 
                            className="btn-interactive py-2 px-6 bg-amber-700 hover:bg-amber-600 rounded-md text-white disabled:bg-stone-600 disabled:cursor-not-allowed" 
                            disabled={isRaceLocked || tempRaca === ficha.racaSelecionada}
                         >
                            Salvar
                        </button>
                        {showSavedMessage && <span className="text-green-400 text-sm">Salvo!</span>}
                    </div>
                </div>

                <div className="flex-grow overflow-y-auto space-y-3 pr-2 min-h-0">
                    {racasData.map(raca => {
                        const isSelected = tempRaca === raca.nome;
                        const isSavedAndLocked = isRaceLocked && ficha.racaSelecionada === raca.nome;
                        const isDisabled = isRaceLocked && !isSavedAndLocked;

                        let containerClasses = 'p-3 rounded transition-all border-2 ';
                        if (isSavedAndLocked) {
                            containerClasses += 'border-amber-700 bg-amber-900/70 cursor-default';
                        } else if (isDisabled) {
                            containerClasses += 'border-transparent bg-stone-800 opacity-50 cursor-not-allowed';
                        } else if (isSelected) {
                            containerClasses += 'border-amber-500 bg-amber-900/50 cursor-pointer';
                        } else {
                            containerClasses += 'border-transparent bg-stone-800 hover:bg-stone-700 cursor-pointer';
                        }
                        
                        return (
                         <div 
                            key={raca.nome} 
                            onClick={() => handleSelectRaca(raca.nome, raca.custo)} 
                            className={containerClasses}
                            style={isSavedAndLocked || isSelected ? {} : componentStyle}
                         >
                            <h3 className="font-medieval text-lg" style={{ color: 'var(--accent-color)' }}>{raca.nome} ({raca.custo} PH)</h3>
                            <p className="text-sm mb-2">{raca.descricao}</p>
                            <ul className="list-disc list-inside text-xs opacity-70 space-y-1">
                                {raca.vantagens.map(v => <li key={v}>{v}</li>)}
                            </ul>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    );
};
