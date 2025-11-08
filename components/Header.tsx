import React, { useState, useEffect, useRef } from 'react';
import type { Ficha } from '../types';
import { FICHA_MATRIZ_ID } from '../constants';

interface HeaderProps {
    fichas: Record<string, Ficha>;
    currentFichaId: string;
    switchFicha: (id: string) => void;
    nomePersonagem: string;
    nomeFicha: string;
    handleUpdate: <K extends keyof Ficha>(key: K, value: Ficha[K]) => void;
    onNewFicha: () => void;
    isGmMode: boolean;
    onToggleGmMode: () => void;
    onImport: () => void;
    onExport: () => void;
    onOpenNpcGenerator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ fichas, currentFichaId, switchFicha, nomePersonagem, nomeFicha, handleUpdate, onNewFicha, isGmMode, onToggleGmMode, onImport, onExport, onOpenNpcGenerator }) => {
    const componentStyle = { backgroundColor: 'var(--component-bg-color)', color: 'var(--text-color)' };
    const [isIoMenuOpen, setIsIoMenuOpen] = useState(false);
    const ioMenuRef = useRef<HTMLDivElement>(null);
    const [isEditingName, setIsEditingName] = useState(false);
    const [newNomeFicha, setNewNomeFicha] = useState(nomeFicha);

     useEffect(() => {
        if (!isEditingName) {
            setNewNomeFicha(nomeFicha);
        }
    }, [nomeFicha, isEditingName]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ioMenuRef.current && !ioMenuRef.current.contains(event.target as Node)) {
                setIsIoMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSaveName = () => {
        if (newNomeFicha.trim() && newNomeFicha.trim() !== nomeFicha) {
            handleUpdate('nomeFicha', newNomeFicha.trim());
        }
        setIsEditingName(false);
    };

    return (
        <header className="p-4 border-b border-stone-700 flex flex-col gap-4" style={{backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border-color)'}}>
            <div className="flex justify-between items-center gap-2">
                {isEditingName ? (
                     <div className="flex-grow flex items-center gap-2">
                        <input
                            type="text"
                            value={newNomeFicha}
                            onChange={(e) => setNewNomeFicha(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                            onBlur={handleSaveName}
                            className="flex-grow border border-stone-600 rounded-md p-2"
                            style={componentStyle}
                            autoFocus
                        />
                        <button onClick={handleSaveName} className="btn-interactive p-2 rounded-md bg-green-700 hover:bg-green-600 text-white">Salvar</button>
                        <button onClick={() => setIsEditingName(false)} className="btn-interactive p-2 rounded-md bg-stone-600 hover:bg-stone-500 text-white">X</button>
                    </div>
                ) : (
                    <div className="flex-grow sm:flex-grow-0 flex items-center gap-2">
                        <select
                            value={currentFichaId}
                            onChange={(e) => switchFicha(e.target.value)}
                            className="flex-grow border border-stone-600 rounded-md p-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                            style={componentStyle}
                        >
                            {Object.values(fichas).sort((a: Ficha, b: Ficha) => {
                                if (a.id === FICHA_MATRIZ_ID) return -1;
                                if (b.id === FICHA_MATRIZ_ID) return 1;
                                return a.nomeFicha.localeCompare(b.nomeFicha);
                            })
                            .map((f: Ficha) => (
                                <option key={f.id} value={f.id}>{f.nomeFicha}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => setIsEditingName(true)}
                            disabled={currentFichaId === FICHA_MATRIZ_ID}
                            title="Editar Nome da Ficha"
                            className="btn-interactive p-2 rounded-md bg-stone-700 hover:bg-stone-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            ✏️
                        </button>
                    </div>
                )}
                
                <div className="flex items-center gap-2">
                     <button
                        onClick={onNewFicha}
                        className="btn-interactive bg-amber-700 hover:bg-amber-600 text-white font-bold p-2 rounded-md"
                        title="Criar Nova Ficha"
                    >
                        +
                    </button>
                    <div className="relative" ref={ioMenuRef}>
                        <button
                            onClick={() => setIsIoMenuOpen(v => !v)}
                            className="btn-interactive p-2 rounded-md bg-stone-700 hover:bg-stone-600 text-white"
                            title="Importar/Exportar Ficha"
                        >
                            <span className="text-xl">🔃</span>
                        </button>
                        {isIoMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 border border-stone-600 rounded-md shadow-lg z-10" style={{ backgroundColor: 'var(--component-bg-color)'}}>
                                <ul className="py-1">
                                    <li>
                                        <button onClick={() => { onImport(); setIsIoMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-stone-700" style={{ color: 'var(--text-color)' }}>
                                            Importar Ficha
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => { onExport(); setIsIoMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-stone-700" style={{ color: 'var(--text-color)' }}>
                                            Exportar Ficha
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={onOpenNpcGenerator}
                        className="btn-interactive p-2 rounded-md bg-stone-700 hover:bg-stone-600 text-white flex items-center justify-center"
                        title="Gerador de NPC"
                    >
                        <span className="text-xl">🧙</span>
                    </button>
                    <button
                        onClick={onToggleGmMode}
                        className={`btn-interactive font-bold p-2 rounded-md text-2xl ${isGmMode ? 'bg-purple-600 hover:bg-purple-500' : 'bg-stone-700 hover:bg-stone-600'}`}
                        title={isGmMode ? "Desativar Modo Mestre" : "Ativar Modo Mestre"}
                    >
                        ⚙️
                    </button>
                </div>
            </div>
             <input
                type="text"
                id="nome-personagem"
                placeholder="Nome do Personagem"
                value={nomePersonagem}
                onChange={(e) => handleUpdate('nomePersonagem', e.target.value)}
                className="w-full text-2xl sm:text-3xl font-medieval bg-transparent text-center focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md px-2 py-1"
                style={{ color: 'var(--accent-color)' }}
            />
        </header>
    );
};