

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useCharacterSheet } from './hooks/useCharacterSheet';
import { useDynamicStyles } from './hooks/useDynamicStyles';
import type { Ficha } from './types';
import { racasData, classesData, FICHA_MATRIZ_ID } from './constants';

// Component Imports
import { Section } from './components/Section';
import { Header } from './components/Header';
import { ResourceBars } from './components/ResourceBars';
import { Attributes } from './components/Attributes';
import { Combat } from './components/Combat';
import { Inventory } from './components/Inventory';
import { Skills } from './components/Skills';
import { Vitals } from './components/Vitals';
import { Actions } from './components/Actions';
import { Locomotion } from './components/Locomotion';
import { Modal } from './components/Modal';
import { VantagensDesvantagensPanel } from './components/VantagensDesvantagensPanel';
import { RacasPanel } from './components/RacasPanel';
import { ClassesPanel } from './components/ClassesPanel';
import { CustomizationModal } from './components/CustomizationModal';
import { ExclusionModal } from './components/ExclusionModal';
import { NotesModal } from './components/NotesModal';
import { PasswordModal } from './components/PasswordModal';
import { CharacterImage } from './components/CharacterImage';
import { NpcGeneratorModal } from './components/NpcGeneratorModal';
import { TabBar } from './components/TabBar';
import { MobileDock } from './components/MobileDock';
import { CompactDerivedStats } from './components/CompactDerivedStats';
import { ClasseHabilidadesModal } from './components/ClasseHabilidadesModal';
import { DiceRoller } from './components/DiceRoller';
import { HistoryModal } from './components/HistoryModal';

const App: React.FC = () => {
    const {
        fichas,
        currentFicha,
        currentFichaId,
        switchFicha,
        updateFicha,
        createFicha,
        deleteFicha,
        importFicha,
        generateNpc,
        resetPontos,
        recomecarFicha,
        resetAesthetics,
        calcularAtributos,
        getPontosVantagem,
        passwordRequest,
        setPasswordRequest,
        closePasswordRequest,
        excludeItems,
        isGmMode,
        toggleGmMode,
        updateGmAdjustment,
        levelUpEffect,
        resetClasseNotification,
        rollDice,
        clearDiceHistory,
        selectedAttribute,
        setSelectedAttribute,
    } = useCharacterSheet();

    useDynamicStyles(currentFicha);
    
    const tabsOrder = useMemo(() => ['principal', 'atributos', 'inventario', 'habilidades', 'perfil'], []);
    const [activeTab, setActiveTab] = useState('principal');
    const [tabAnimationClass, setTabAnimationClass] = useState('animate-tab-enter');
    const prevTabIndexRef = useRef(tabsOrder.indexOf('principal'));

    const [isVantagensPanelOpen, setVantagensPanelOpen] = useState(false);
    const [isRacasPanelOpen, setRacasPanelOpen] = useState(false);
    const [isClassesPanelOpen, setClassesPanelOpen] = useState(false);
    const [isClasseHabilidadesModalOpen, setClasseHabilidadesModalOpen] = useState(false);
    const [isNewFichaModalOpen, setNewFichaModalOpen] = useState(false);
    const [isCustomizationOpen, setCustomizationOpen] = useState(false);
    const [isExclusionModalOpen, setExclusionModalOpen] = useState(false);
    const [isNotesModalOpen, setNotesModalOpen] = useState(false);
    const [isConfirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [isNpcGeneratorOpen, setNpcGeneratorOpen] = useState(false);
    const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);
    const [newFichaName, setNewFichaName] = useState('');

    const handleUpdate = useCallback(<K extends keyof Ficha>(key: K, value: Ficha[K]) => {
        if (currentFicha) {
            updateFicha(currentFichaId, { [key]: value });
        }
    }, [currentFicha, currentFichaId, updateFicha]);

    const handleBulkUpdate = useCallback((updates: Partial<Ficha>) => {
        if (currentFicha) {
            updateFicha(currentFichaId, updates);
        }
    }, [currentFicha, currentFichaId, updateFicha]);

    useEffect(() => {
      if (currentFicha?.showClasseSkillsNotification) {
          setClasseHabilidadesModalOpen(true);
      }
    }, [currentFicha?.showClasseSkillsNotification]);
    
    const handleTabClick = useCallback((newTab: string) => {
        const oldIndex = prevTabIndexRef.current;
        const newIndex = tabsOrder.indexOf(newTab);

        if (newIndex === oldIndex) return;

        if (newIndex > oldIndex) {
            setTabAnimationClass('animate-slide-in-right');
        } else {
            setTabAnimationClass('animate-slide-in-left');
        }
        
        prevTabIndexRef.current = newIndex;
        setActiveTab(newTab);
    }, [tabsOrder]);


    const handleCreateFicha = () => {
        if (newFichaName.trim()) {
            createFicha(newFichaName.trim());
            setNewFichaName('');
            setNewFichaModalOpen(false);
        }
    };
    
    const handleExportFicha = useCallback(() => {
        if (!currentFicha) return;
        try {
            const fichaJson = JSON.stringify(currentFicha, null, 2);
            const blob = new Blob([fichaJson], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const fileName = (currentFicha.nomePersonagem || currentFicha.nomeFicha || 'ficha_rpg').trim().replace(/\s+/g, '_');
            a.download = `${fileName}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Failed to export ficha", error);
            alert("Ocorreu um erro ao exportar a ficha.");
        }
    }, [currentFicha]);

    const handleImportFicha = useCallback(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const text = event.target?.result;
                    if (typeof text !== 'string') throw new Error("File content is not a string.");
                    
                    const importedFichaData = JSON.parse(text);

                    if (typeof importedFichaData !== 'object' || importedFichaData === null || !('nomeFicha' in importedFichaData)) {
                        throw new Error("Invalid ficha file format.");
                    }
                    importFicha(importedFichaData);
                } catch (error) {
                    console.error("Failed to import ficha", error);
                    alert("Falha ao importar ficha. O arquivo pode estar corrompido ou em formato inválido.");
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }, [importFicha]);

    const handleGenerateNpc = (level: number, archetype: string) => {
        generateNpc(level, archetype);
        setNpcGeneratorOpen(false);
    };

    const handleConfirmDelete = () => {
        deleteFicha();
        setConfirmDeleteOpen(false);
    };

    const openExclusionModal = () => {
        setPasswordRequest(() => () => setExclusionModalOpen(true));
    };
    
    if (!currentFicha) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-stone-800 text-white p-4">
                <div className="text-center">
                    <h1 className="text-3xl font-medieval mb-4">Carregando Ficha...</h1>
                    <p>Se a ficha não carregar, por favor, crie uma nova.</p>
                     <button
                        onClick={() => setNewFichaModalOpen(true)}
                        className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
                    >
                        Criar Nova Ficha
                    </button>
                    {isNewFichaModalOpen && (
                         <Modal title="Criar Nova Ficha" onClose={() => setNewFichaModalOpen(false)}>
                            <input
                                type="text"
                                value={newFichaName}
                                onChange={(e) => setNewFichaName(e.target.value)}
                                placeholder="Nome da Ficha"
                                className="w-full p-2 border rounded border-stone-600"
                                style={{ backgroundColor: 'var(--component-bg-color)', color: 'var(--text-color)' }}
                            />
                            <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => setNewFichaModalOpen(false)} className="px-4 py-2 bg-stone-600 rounded text-white">Cancelar</button>
                                <button onClick={handleCreateFicha} className="px-4 py-2 bg-amber-700 rounded text-white">Criar</button>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        );
    }

    const selectedRacaData = currentFicha.racaSelecionada ? racasData.find(r => r.nome === currentFicha.racaSelecionada) : null;
    const selectedClasseData = currentFicha.classeSelecionada ? classesData.find(c => c.nome === currentFicha.classeSelecionada) : null;
    const almasDisponiveis = currentFicha.almasTotais - currentFicha.almasGastas;
    
    const appClasses = `${currentFicha.darkMode ? 'dark-mode' : 'light-mode'} ${currentFicha.theme}`;
    const componentStyle = { backgroundColor: 'var(--component-bg-color)', color: 'var(--text-color)' };

    return (
        <div className={appClasses}>
            <div id="character-sheet-container" className={`relative max-w-2xl mx-auto sm:rounded-xl shadow-2xl shadow-black/50 overflow-hidden sm:my-4 ${levelUpEffect ? 'level-up-glow' : ''}`} style={{
                backgroundColor: 'var(--sheet-bg-color)',
                opacity: currentFicha.sheetOpacity / 100,
                borderWidth: `var(--border-width)`,
                borderStyle: `var(--border-style)`,
                borderColor: `var(--border-color)`,
                boxShadow: `var(--sheet-shadow)`,
            }}>
                <Header 
                    fichas={fichas}
                    currentFichaId={currentFichaId}
                    switchFicha={switchFicha}
                    nomePersonagem={currentFicha.nomePersonagem}
                    nomeFicha={currentFicha.nomeFicha}
                    handleUpdate={handleUpdate}
                    onNewFicha={() => setNewFichaModalOpen(true)}
                    isGmMode={isGmMode}
                    onToggleGmMode={toggleGmMode}
                    onImport={handleImportFicha}
                    onExport={handleExportFicha}
                    onOpenNpcGenerator={() => setNpcGeneratorOpen(true)}
                />
                
                <main className="p-2 sm:p-4">
                    {/* ======== DESKTOP VIEW ======== */}
                    <div className="hidden sm:space-y-4 sm:block">
                        <Section title="Informações Básicas" defaultOpen>
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <textarea
                                    id="descricao-personagem"
                                    placeholder="Descrição do seu personagem"
                                    value={currentFicha.descricaoPersonagem}
                                    onChange={(e) => handleUpdate('descricaoPersonagem', e.target.value)}
                                    className="w-full flex-grow p-2 border border-stone-600 rounded-md h-40 resize-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    style={componentStyle}
                                />
                                <CharacterImage
                                    image={currentFicha.characterImage}
                                    onUpdate={(img) => handleUpdate('characterImage', img)}
                                />
                            </div>
                        </Section>

                        <Section title="Recursos">
                            <ResourceBars 
                                ficha={currentFicha} 
                                onUpdate={handleBulkUpdate} 
                                isGmMode={isGmMode}
                                onGmUpdate={updateGmAdjustment}
                            />
                        </Section>

                        <Section title="Atributos">
                            <Attributes 
                                ficha={currentFicha}
                                onBulkUpdate={handleBulkUpdate}
                                isGmMode={isGmMode}
                                onGmUpdate={updateGmAdjustment}
                                onSelectAttribute={setSelectedAttribute}
                                selectedAttribute={selectedAttribute}
                            />
                        </Section>
                        
                        <Section title="Combate">
                            <Combat 
                                ficha={currentFicha} 
                                onUpdate={handleUpdate} 
                                onRecalculate={calcularAtributos} 
                                isGmMode={isGmMode}
                                onGmUpdate={updateGmAdjustment}
                            />
                        </Section>

                        <Section title="Inventário">
                            <Inventory ficha={currentFicha} onUpdate={handleUpdate as any} onRecalculate={calcularAtributos}/>
                        </Section>

                        <Section title="Habilidades">
                            <Skills ficha={currentFicha} onUpdate={handleBulkUpdate} isGmMode={isGmMode} />
                        </Section>

                        <Section title="Vantagens e Desvantagens">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold" style={{ color: 'var(--accent-color)' }}>Vantagens</h3>
                                    <div className="p-2 rounded-md min-h-[4rem] space-y-1" style={componentStyle}>
                                        {currentFicha.vantagens.length > 0 ? (
                                            currentFicha.vantagens.map(v => 
                                                <div key={v} className="text-sm p-1 rounded" style={{...componentStyle, backgroundColor: `rgba(0,0,0,0.1)`}}>
                                                    <span>{v}</span>
                                                </div>
                                            )
                                        ) : <p className="text-sm opacity-70 italic">Nenhuma vantagem selecionada.</p>}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-red-500">Desvantagens</h3>
                                    <div className="p-2 rounded-md min-h-[4rem] space-y-1" style={componentStyle}>
                                        {currentFicha.desvantagens.length > 0 ? (
                                            currentFicha.desvantagens.map(d => 
                                                <div key={d} className="text-sm p-1 rounded" style={{...componentStyle, backgroundColor: `rgba(0,0,0,0.1)`}}>
                                                    <span>{d}</span>
                                                </div>
                                            )
                                        ) : <p className="text-sm opacity-70 italic">Nenhuma desvantagem selecionada.</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <button onClick={() => setVantagensPanelOpen(true)} className="btn-interactive py-2 px-4 bg-amber-800 hover:bg-amber-700 rounded-md text-white">Gerenciar</button>
                                    <button onClick={openExclusionModal} className="btn-interactive py-2 px-4 bg-red-900 hover:bg-red-800 rounded-md text-white">Excluir...</button>
                                </div>
                            </div>
                        </Section>

                        <Section title="Raça e Classe">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-bold" style={{ color: 'var(--accent-color)' }}>Raça</label>
                                    <div className="p-3 rounded-md min-h-[8rem]" style={componentStyle}>
                                        {selectedRacaData ? (
                                            <>
                                                <h4 className="font-bold text-lg">{selectedRacaData.nome.split(' (')[0]}</h4>
                                                <p className="text-sm opacity-80 mt-1">{selectedRacaData.descricao}</p>
                                            </>
                                        ) : <p className="text-sm opacity-70 italic">Nenhuma raça selecionada.</p>}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                         <button onClick={() => setRacasPanelOpen(true)} className="btn-interactive py-2 px-4 bg-amber-800 hover:bg-amber-700 rounded-md text-white">Gerenciar</button>
                                         <button onClick={openExclusionModal} className="btn-interactive py-2 px-4 bg-red-900 hover:bg-red-800 rounded-md text-white" disabled={!currentFicha.racaSelecionada}>Excluir...</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <label className="font-bold" style={{ color: 'var(--accent-color)' }}>Classe</label>
                                        {selectedClasseData && (
                                            <button 
                                                onClick={() => setClasseHabilidadesModalOpen(true)} 
                                                className={almasDisponiveis > 0 ? "soul-indicator-animation" : ""} 
                                                title="Habilidades de Classe (Almas disponíveis!)"
                                            >
                                                <span className="text-2xl">🛍️</span>
                                            </button>
                                        )}
                                    </div>
                                    <div className="p-3 rounded-md min-h-[8rem]" style={componentStyle}>
                                         {selectedClasseData ? (
                                            <>
                                                <h4 className="font-bold text-lg">{selectedClasseData.nome}</h4>
                                                <p className="text-sm opacity-80 mt-1">{selectedClasseData.descricao}</p>
                                            </>
                                        ) : <p className="text-sm opacity-70 italic">Nenhuma classe selecionada.</p>}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <button onClick={() => setClassesPanelOpen(true)} className="btn-interactive py-2 px-4 bg-amber-800 hover:bg-amber-700 rounded-md text-white">
                                            Gerenciar
                                        </button>
                                        <button onClick={openExclusionModal} className="btn-interactive py-2 px-4 bg-red-900 hover:bg-red-800 rounded-md text-white" disabled={!currentFicha.classeSelecionada}>Excluir...</button>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Locomoção">
                            <Locomotion 
                                ficha={currentFicha}
                                onSelectAttribute={setSelectedAttribute}
                                selectedAttribute={selectedAttribute}
                            />
                        </Section>
                        
                        <Section title="Status">
                             <Vitals 
                                ficha={currentFicha} 
                                onBulkUpdate={handleBulkUpdate} 
                                pontosVantagemDisponiveis={getPontosVantagem()}
                                isGmMode={isGmMode}
                                onGmUpdate={updateGmAdjustment}
                                levelUpEffect={levelUpEffect}
                            />
                        </Section>

                        <div className="space-y-4 pt-4">
                            <Actions 
                                onResetPontos={resetPontos}
                                onRecomecar={recomecarFicha}
                                onRequestDelete={() => setConfirmDeleteOpen(true)}
                            />

                            <div className="flex justify-center items-center gap-4 pt-4">
                                <button onClick={() => setHistoryModalOpen(true)} title="Histórico de Rolagens" className="btn-interactive p-2 w-12 h-12 text-2xl bg-stone-800 text-white rounded-full">📜</button>
                                <button onClick={() => setNotesModalOpen(true)} title="Anotações" className="btn-interactive p-2 w-12 h-12 text-2xl bg-stone-800 text-white rounded-full">📝</button>
                                <button onClick={() => handleUpdate('darkMode', false)} title="Modo Claro" className="btn-interactive p-2 w-12 h-12 text-2xl bg-yellow-400 text-black rounded-full">☀️</button>
                                <button onClick={() => setCustomizationOpen(true)} title="Customizar" className="btn-interactive p-2 w-12 h-12 text-2xl bg-purple-800 hover:bg-purple-700 rounded-md text-white">🎨</button>
                                <button onClick={() => handleUpdate('darkMode', true)} title="Modo Escuro" className="btn-interactive p-2 w-12 h-12 text-2xl bg-indigo-900 text-white rounded-full">🌙</button>
                                <DiceRoller
                                    onRoll={rollDice}
                                    selectedAttribute={selectedAttribute}
                                    ficha={currentFicha}
                                    positionClass="relative z-10"
                                    isDraggable={true}
                                />
                            </div>
                        </div>
                    </div>
                     {/* ======== MOBILE TAB VIEW ======== */}
                    <div className="sm:hidden space-y-4 pb-20">
                        <div key={activeTab} className={tabAnimationClass}>
                            {activeTab === 'principal' && (
                                <div className="space-y-4">
                                    <Vitals ficha={currentFicha} onBulkUpdate={handleBulkUpdate} pontosVantagemDisponiveis={getPontosVantagem()} isGmMode={isGmMode} onGmUpdate={updateGmAdjustment} levelUpEffect={levelUpEffect} />
                                    <ResourceBars ficha={currentFicha} onUpdate={handleBulkUpdate} isGmMode={isGmMode} onGmUpdate={updateGmAdjustment} />
                                    <CompactDerivedStats ficha={currentFicha} />
                                    <Locomotion ficha={currentFicha} onSelectAttribute={setSelectedAttribute} selectedAttribute={selectedAttribute} />
                                </div>
                            )}
                            {activeTab === 'atributos' && (
                                <Attributes ficha={currentFicha} onBulkUpdate={handleBulkUpdate} isGmMode={isGmMode} onGmUpdate={updateGmAdjustment} onSelectAttribute={setSelectedAttribute} selectedAttribute={selectedAttribute} />
                            )}
                            {activeTab === 'inventario' && (
                                <div className="space-y-4">
                                    <Combat ficha={currentFicha} onUpdate={handleUpdate} onRecalculate={calcularAtributos} isGmMode={isGmMode} onGmUpdate={updateGmAdjustment} />
                                    <Inventory ficha={currentFicha} onUpdate={handleUpdate as any} onRecalculate={calcularAtributos} />
                                </div>
                            )}
                            {activeTab === 'habilidades' && (
                                <Skills ficha={currentFicha} onUpdate={handleBulkUpdate} isGmMode={isGmMode} />
                            )}
                            {activeTab === 'perfil' && (
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-4 items-center">
                                        <textarea id="descricao-personagem-mobile" placeholder="Descrição do seu personagem" value={currentFicha.descricaoPersonagem} onChange={(e) => handleUpdate('descricaoPersonagem', e.target.value)} className="w-full p-2 border border-stone-600 rounded-md h-24 resize-none" style={componentStyle} />
                                        <CharacterImage image={currentFicha.characterImage} onUpdate={(img) => handleUpdate('characterImage', img)} />
                                    </div>
                                    <div className="p-3 rounded-lg" style={componentStyle}>
                                        <h3 className="font-bold mb-2" style={{ color: 'var(--accent-color)' }}>Vantagens</h3>
                                        {currentFicha.vantagens.length > 0 ? currentFicha.vantagens.map(v => <div key={v} className="text-sm"><span>{v}</span></div>) : <p className="text-sm opacity-70 italic">Nenhuma.</p>}
                                        <h3 className="font-bold text-red-500 mt-2 mb-1">Desvantagens</h3>
                                        {currentFicha.desvantagens.length > 0 ? currentFicha.desvantagens.map(d => <div key={d} className="text-sm"><span>{d}</span></div>) : <p className="text-sm opacity-70 italic">Nenhuma.</p>}
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <button onClick={() => setVantagensPanelOpen(true)} className="btn-interactive py-2 px-4 bg-amber-800 hover:bg-amber-700 rounded-md text-white text-sm">Gerenciar</button>
                                            <button onClick={openExclusionModal} className="btn-interactive py-2 px-4 bg-red-900 hover:bg-red-800 rounded-md text-white text-sm">Excluir...</button>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-lg" style={componentStyle}>
                                         <h3 className="font-bold" style={{ color: 'var(--accent-color)' }}>Raça</h3>
                                         {selectedRacaData ? <p className="text-sm opacity-80 mt-1">{selectedRacaData.nome.split(' (')[0]}: {selectedRacaData.descricao}</p> : <p className="text-sm opacity-70 italic">Nenhuma.</p>}
                                         <div className="grid grid-cols-2 gap-2 mt-2">
                                            <button onClick={() => setRacasPanelOpen(true)} className="btn-interactive py-2 px-4 bg-amber-800 hover:bg-amber-700 rounded-md text-white text-sm">Gerenciar</button>
                                            <button onClick={openExclusionModal} className="btn-interactive py-2 px-4 bg-red-900 hover:bg-red-800 rounded-md text-white text-sm" disabled={!currentFicha.racaSelecionada}>Excluir...</button>
                                         </div>
                                    </div>
                                    <div className="p-3 rounded-lg" style={componentStyle}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold" style={{ color: 'var(--accent-color)' }}>Classe</h3>
                                            {selectedClasseData && (
                                                <button 
                                                    onClick={() => setClasseHabilidadesModalOpen(true)} 
                                                    className={almasDisponiveis > 0 ? "soul-indicator-animation" : ""} 
                                                    title="Habilidades de Classe (Almas disponíveis!)"
                                                >
                                                    <span className="text-2xl">🛍️</span>
                                                </button>
                                            )}
                                        </div>
                                         {selectedClasseData ? <p className="text-sm opacity-80 mt-1">{selectedClasseData.nome}: {selectedClasseData.descricao}</p> : <p className="text-sm opacity-70 italic">Nenhuma.</p>}
                                         <div className="grid grid-cols-2 gap-2 mt-2">
                                            <button onClick={() => setClassesPanelOpen(true)} className="btn-interactive py-2 px-4 bg-amber-800 hover:bg-amber-700 rounded-md text-white text-sm">
                                                Gerenciar
                                            </button>
                                            <button onClick={openExclusionModal} className="btn-interactive py-2 px-4 bg-red-900 hover:bg-red-800 rounded-md text-white text-sm" disabled={!currentFicha.classeSelecionada}>Excluir...</button>
                                         </div>
                                    </div>
                                    <Actions onResetPontos={resetPontos} onRecomecar={recomecarFicha} onRequestDelete={() => setConfirmDeleteOpen(true)} />
                                    <div className="flex justify-center items-center gap-4 pt-4">
                                        <button onClick={() => setHistoryModalOpen(true)} title="Histórico de Rolagens" className="btn-interactive p-2 w-12 h-12 text-2xl bg-stone-800 text-white rounded-full">📜</button>
                                        <button onClick={() => setNotesModalOpen(true)} title="Anotações" className="btn-interactive p-2 w-12 h-12 text-2xl bg-stone-800 text-white rounded-full">📝</button>
                                        <button onClick={() => handleUpdate('darkMode', false)} title="Modo Claro" className="btn-interactive p-2 w-12 h-12 text-2xl bg-yellow-400 text-black rounded-full">☀️</button>
                                        <button onClick={() => setCustomizationOpen(true)} title="Customizar" className="btn-interactive p-2 w-12 h-12 text-2xl bg-purple-800 hover:bg-purple-700 rounded-md text-white">🎨</button>
                                        <button onClick={() => handleUpdate('darkMode', true)} title="Modo Escuro" className="btn-interactive p-2 w-12 h-12 text-2xl bg-indigo-900 text-white rounded-full">🌙</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </main>
            </div>
            
            <div className="sm:hidden">
                <DiceRoller
                    onRoll={rollDice}
                    selectedAttribute={selectedAttribute}
                    ficha={currentFicha}
                    positionClass="fixed bottom-20 right-5 z-40"
                    buttonClass="btn-interactive p-2 w-16 h-16 text-4xl opacity-75 hover:opacity-100 hover:shadow-lg hover:shadow-amber-400 transition-all duration-300"
                />
            </div>

            
            <MobileDock isInventoryActive={activeTab === 'inventario'} />
            <TabBar activeTab={activeTab} onTabClick={handleTabClick} />
            
            {isHistoryModalOpen && (
                <HistoryModal
                    history={currentFicha.diceHistory || []}
                    onRequestClear={clearDiceHistory}
                    onClose={() => setHistoryModalOpen(false)}
                />
            )}
            
            {isNotesModalOpen && (
                <NotesModal 
                    notes={currentFicha.anotacoes} 
                    onUpdate={(val) => handleUpdate('anotacoes', val)}
                    onClose={() => setNotesModalOpen(false)}
                />
            )}

            {isVantagensPanelOpen && (
                <VantagensDesvantagensPanel
                    ficha={currentFicha}
                    pontosVantagemDisponiveis={getPontosVantagem()}
                    onBulkUpdate={handleBulkUpdate}
                    onClose={() => setVantagensPanelOpen(false)}
                />
            )}
             {isRacasPanelOpen && (
                <RacasPanel
                    ficha={currentFicha}
                    pontosVantagemDisponiveis={getPontosVantagem()}
                    onUpdate={handleUpdate}
                    onClose={() => setRacasPanelOpen(false)}
                />
            )}
            {isClassesPanelOpen && (
                <ClassesPanel
                    ficha={currentFicha}
                    pontosVantagemDisponiveis={getPontosVantagem()}
                    onUpdate={handleUpdate}
                    onClose={() => setClassesPanelOpen(false)}
                />
            )}
             {isClasseHabilidadesModalOpen && (
                <ClasseHabilidadesModal
                    ficha={currentFicha}
                    pontosVantagemDisponiveis={getPontosVantagem()}
                    onUpdate={handleBulkUpdate}
                    onClose={() => {
                        setClasseHabilidadesModalOpen(false);
                        resetClasseNotification();
                    }}
                    isOpeningAfterLevelUp={currentFicha.showClasseSkillsNotification}
                    isGmMode={isGmMode}
                />
            )}

            {isNewFichaModalOpen && (
                 <Modal title="Criar Nova Ficha" onClose={() => setNewFichaModalOpen(false)}>
                    <input
                        type="text"
                        value={newFichaName}
                        onChange={(e) => setNewFichaName(e.target.value)}
                        placeholder="Nome da Ficha"
                        className="w-full p-2 border rounded border-stone-600"
                        style={{ backgroundColor: 'var(--component-bg-color)', color: 'var(--text-color)' }}
                    />
                    <div className="mt-4 flex justify-end gap-2">
                        <button onClick={() => setNewFichaModalOpen(false)} className="btn-interactive px-4 py-2 bg-stone-600 rounded text-white">Cancelar</button>
                        <button onClick={handleCreateFicha} className="btn-interactive px-4 py-2 bg-amber-700 rounded text-white">Criar</button>
                    </div>
                </Modal>
            )}
            {isNpcGeneratorOpen && (
                 <NpcGeneratorModal
                    onClose={() => setNpcGeneratorOpen(false)}
                    onGenerate={handleGenerateNpc}
                 />
            )}
            {isCustomizationOpen && (
                <CustomizationModal 
                    ficha={currentFicha}
                    onClose={() => setCustomizationOpen(false)}
                    onUpdate={handleBulkUpdate}
                    onReset={resetAesthetics}
                />
            )}
             {isExclusionModalOpen && (
                <ExclusionModal
                    ficha={currentFicha}
                    onClose={() => setExclusionModalOpen(false)}
                    onConfirm={excludeItems}
                />
            )}
            {passwordRequest && (
                <PasswordModal
                    isOpen={!!passwordRequest}
                    onClose={closePasswordRequest}
                    onSuccess={() => {
                        if (passwordRequest) {
                            passwordRequest();
                        }
                        closePasswordRequest();
                    }}
                />
            )}
            {isConfirmDeleteOpen && (
                <Modal title="Confirmar Exclusão" onClose={() => setConfirmDeleteOpen(false)}>
                    <p>Tem certeza que deseja excluir a ficha "{currentFicha.nomeFicha}"?</p>
                    <div className="mt-4 flex justify-end gap-2">
                        <button onClick={() => setConfirmDeleteOpen(false)} className="btn-interactive px-4 py-2 bg-stone-600 rounded text-white">Não</button>
                        <button onClick={handleConfirmDelete} className="btn-interactive px-4 py-2 bg-red-700 rounded text-white">Sim, Excluir</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default App;