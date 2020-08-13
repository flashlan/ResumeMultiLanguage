import createEngine, { DiagramEngine, DiagramModel, DefaultNodeModel, LinkModel, DiagramWidget } from "storm-react-diagrams";
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../fontawesome';

require("storm-react-diagrams/dist/style.min.css");

export default () => {
    const { t } = useTranslation(['translation', 'apresenta']);

    //1) setup the diagram engine
    const engine = new DiagramEngine();
    engine.installDefaultFactories();

    //2) setup the diagram model
    const model = new DiagramModel();

    //BOX TITLE
    const title = new DefaultNodeModel(<div class="buttonc red"><i className="fa fa-superpowers fa-spin" />  {t('apresenta:roadmap.myroadmap')} <i className="fa fa-superpowers fa-spin" /></div>, "rgb(212,29,29)");
    title.setPosition(550, 10)

    //Box Good Start Poit
    const centro = new DefaultNodeModel(t('apresenta:roadmap.starthere'), "rgb(255, 253, 0)");
    const prt1 = centro.addInPort(<div class="buttonr grey"><i className="fa fa-tasks fa-1x" /></div>);
    const prt00 = centro.addInPort(" ");
    const prt3 = centro.addInPort(<div class="buttonr grey"><i className="fa fa-tasks fa-1x" /></div>);
    const prt2 = centro.addOutPort(<div class="buttonl grey"><i className="fa fa-tasks fa-1x" /></div>);
    const prt03 = centro.addOutPort(" ");
    const prt4 = centro.addOutPort(<div class="buttonl grey"><i className="fa fa-tasks fa-1x" /></div>);
    centro.setPosition(30, 130);

    //Box Data Science
    const node1 = new DefaultNodeModel(t('apresenta:roadmap.dtascien'), "rgb(0,192,255)");
    const prtIAIn = node1.addInPort(" ")
    const prtIAOut = node1.addOutPort(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" />{t('apresenta:roadmap.DtSciencStart')}</div></div>);
    node1.setPosition(150, 260);

    //1-box math
    const boxmath = new DefaultNodeModel(<div class="buttonc yellow"> <div class="buttonc blue"><i className="fas fa-square-root-alt fa-1x zoom fa-fw" /> <i className="fa fa-blank fa-1x " />1 - {t('apresenta:roadmap.mathandstats')}<i className="fa fa-chevron-right fa-1x fa-blank " /><i className="fa fa-blank fa-1x " /><i className="fa fa-blank fa-1x " /></div></div>, "rgb(73, 67, 84)");
    const prtMath0In = boxmath.addInPort(<div class="buttontag"><i className="fa fa-tag " />  {t('apresenta:roadmap.algeb')}</div>);
    const prtMath1In = boxmath.addInPort(<div class="buttontag"><i className="fa fa-tag " />  {t('apresenta:roadmap.calc')}</div>);
    const prtMath3In = boxmath.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.optim')} </div>);
    const prtMath4In = boxmath.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.functions')} </div>);
    const prtMathIn = boxmath.addInPort(" ");
    const prtMath2Out1 = boxmath.addOutPort(<div class="buttontag"> {t('apresenta:roadmap.descript')} <i className="fa fa-tag " /></div>);
    const prtMathOut3 = boxmath.addOutPort(<div class="buttontag"> {t('apresenta:roadmap.inferent')} <i className="fa fa-tag " /></div>);
    const prtMathOut4 = boxmath.addOutPort(<div class="buttontag"> {t('apresenta:roadmap.diferent')} <i className="fa fa-tag " /></div>);
    const prtMathOut5 = boxmath.addOutPort(<div class="buttontag"> {t('apresenta:roadmap.associat')} <i className="fa fa-tag " /></div>);
    const prtMathOut = boxmath.addOutPort(" ");
    boxmath.setPosition(290, 100);

    //2-Box PROGRAMACAO
    const boxApd = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-code fa-1x zoom" /> 2 - {t('apresenta:roadmap.dsprogr')}  </div><div class="buttonc blue"><i className="fa fa-chevron-right fa-1x flash-me1" /><i className="fa fa-chevron-right fa-1x flash-me2" /><i className="fa fa-chevron-right fa-1x flash-me3" /></div></div>, "rgb(73, 67, 84)");
    const prtIAOutin = boxApd.addInPort(" ");
    const prtApdtag2In = boxApd.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.syntax')}</div>);
    const prtApdtag3In = boxApd.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.dsdatastruct')}</div>);
    const prtApdtag4In = boxApd.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.dsctrlstruct')}</div>);
    const prtApdIn = boxApd.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.oops')}</div>);
    const prtApdPython = boxApd.addOutPort(<div class="buttonr purple"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div> Python </div>);
    const prtROut = boxApd.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>R </div>);
    const prtJavaOut = boxApd.addOutPort(<div class="buttonr purple"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div> Java</div>);
    const prtJSasOut = boxApd.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>SAS </div>);
    const prtApdOut = boxApd.addOutPort(" ");
    boxApd.setPosition(690, 130);

    //PYTHON LIBS BOX
    const boxPython = new DefaultNodeModel(<div class="buttonc red"><div class="buttonc blue"><i className="fab fa-python zoom fa-1x" /></div> {t('apresenta:roadmap.pylibs')}</div>, "rgb(73, 67, 84)");
    const prtPandasIn = boxPython.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Pandas</div>);
    const prtNumpyIn = boxPython.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Numpy</div>);
    const prtNltkIn = boxPython.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>NLTK</div>);
    boxPython.setPosition(1100, 80);

    //3-Box Databases
    const boxSttcs = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 3 - {t('apresenta:roadmap.dsdbstitle')}</div> </div>, "rgb(73, 67, 84)");
    const prtSttcsIn = boxSttcs.addInPort(" ");
    const prtSttcsOut1 = boxSttcs.addOutPort(<div class="buttonr white"><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div> MySql </div>);
    const prtSttcsOut2 = boxSttcs.addOutPort(<div class="buttonr black"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /></div> MongoDb </div>);
    const prtSttcsOut3 = boxSttcs.addOutPort(<div class="buttonr black"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /></div> Cassandra </div>);
    const prtSttcsIn2 = boxSttcs.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.dsmining')}</div>);
    const prtSttcsOut5 = boxSttcs.addOutPort(<div class="buttonr black"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /></div> MemSQL </div>);
    const prtSttcsOut6 = boxSttcs.addOutPort(<div class="buttonr black"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /></div> HBase </div>);
    const prtSttcsOut = boxSttcs.addOutPort(" ");
    boxSttcs.setPosition(910, 370);

    //4-Box Data Warangling
    const boxDtWrngl = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 4 - {t('apresenta:roadmap.dtawrglng')}</div></div>, "rgb(73, 67, 84)");
    const prtDtWrnglsIn = boxDtWrngl.addInPort(" ");
    const prtDataWratag1In = boxDtWrngl.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.dtacollect')}</div>);
    const prtDataWratag2In = boxDtWrngl.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.dtaclean')}</div>);
    const prtDataWratag3In = boxDtWrngl.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.dtaexplor')}</div>);
    const prtDtWrnglOut1 = boxDtWrngl.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Pandas </div>);
    const prtDtWrnglsOut2 = boxDtWrngl.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Tabula</div>);
    const prtDtWrnglOut3 = boxDtWrngl.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>OpenRefina </div>);
    const prtDtWrnglOut4 = boxDtWrngl.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Excel Power Query </div>);
    const prtDtWrnglOut5 = boxDtWrngl.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Data Wrangler </div>);
    const prtDtWrnglOut6 = boxDtWrngl.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> CSV Kit </div>);
    const prtDtWrnglOut = boxDtWrngl.addOutPort(" ");

    boxDtWrngl.setPosition(920, 620);

    //5-DATA VIZUALIZATION BOX
    const boxVsulztn = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 5 - {t('apresenta:roadmap.dsvisu')} </div></div>, "rgb(73, 67, 84)");
    const prtVsulztnIn = boxVsulztn.addInPort(" ");
    /* Check OK */
    const prtVsulztnOut = boxVsulztn.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> matplotlib </div>);
    const prtVsulztnseabornOut = boxVsulztn.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Seaborn </div>);
    const prtVsulztnggplotOut = boxVsulztn.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Ggplot </div>);
    const prtVisuaPowerBIOut = boxVsulztn.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Tableau</div>);
    const prtVisualTableauOut = boxVsulztn.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> PowerBI</div>);
    boxVsulztn.setPosition(630, 410);

    //6-MACHINE LEARNING BOX
    const boxML = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 6 -  Machine Learning </div></div>, "rgb(73, 67, 84)");
    const prtMLIn = boxML.addInPort(" ");
    const prtMLtag1In = boxML.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.sprvised')} </div>);
    const prtMLtag2In = boxML.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.unsprvised')} </div>);
    const prtMLScikitOut = boxML.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Tensor Flow </div>);
    const prtMLTensorOut = boxML.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> SciKitLearn</div>);
    const prtMLOut = boxML.addOutPort(" ");
    boxML.setPosition(280, 400);

    //7- DEEP LEARNING BOX
    const boxDL = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 7 -  Deep Learning </div></div>, "rgb(73, 67, 84)");
    const prtDLIn = boxDL.addInPort(" ");
    const prtDLtag1In = boxDL.addInPort(<div class="buttontag"><i className="fa fa-tag " /> RNN </div>);
    const prtDLtag2In = boxDL.addInPort(<div class="buttontag"><i className="fa fa-tag " /> CNN </div>);
    const prtDLOut = boxDL.addOutPort(" ");
    const prtDLkerasOut = boxDL.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Keras</div>);
    const prtDLCaffeOut = boxDL.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Caffeh</div>);
    const prtDLPytorchOut = boxDL.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Pytorch</div>);
    boxDL.setPosition(20, 540);


    //8- BIG DATA BOX
    const boxBigData = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 8 -  Big Data </div></div>, "rgb(73, 67, 84)");
    const prtBigDataIn = boxBigData.addInPort(" ");
    const prtBigDataHadoopOut = boxBigData.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Hadoop</div>);
    const prtBigDataSparkOut = boxBigData.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Spark</div>);
    boxBigData.setPosition(300, 750);

    //Box Programador
    const boxProgStart = new DefaultNodeModel(t('apresenta:roadmap.progr'), "rgb(0,192,255)");
    const prtDevIn = boxProgStart.addInPort(" ")
    const prtDevOut = boxProgStart.addOutPort(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> Start </div></div>);
    const prtDevOut2 = boxProgStart.addOutPort(" ");
    boxProgStart.setPosition(150, 70);

    //Box Backend
    const boxBackend = new DefaultNodeModel(<div class="buttonc blue"><i className="fa fa-superpowers fa-spin" /> BACKEND<i className="fa fa-superpowers fa-spin" /></div>, "rgb(81, 35, 3)");
    const prtBackIn = boxBackend.addInPort(" ")
    const prtBackOut = boxBackend.addOutPort(" ");
    boxBackend.setPosition(270, -50);

    //Box FrontEnd
    const boxFrontend = new DefaultNodeModel(<div class="buttonc red"><i className="fa fa-superpowers fa-spin" /> FRONTEND<i className="fa fa-superpowers fa-spin" /></div>, "rgb( 81, 35, 3)");
    const prtFrontIn = boxFrontend.addInPort(" ")
    const prtFrontOut = boxFrontend.addOutPort(" ");
    boxFrontend.setPosition(70, -50);


    //1 - Box language
    const boxLang = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 1 - {t('apresenta:roadmap.choslang')} </div></div>, "rgb(73, 67, 84)");
    const prtLangIn = boxLang.addInPort(<div class="buttonr white"  ><div class="buttonr grey"><i className="ffa-li fa fa-square" /> </div> In </div>);
    const prtLangOut = boxLang.addOutPort(" ");
    const prtLangCOut = boxLang.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div> C/C++</div>);
    const prtLangJavaOut = boxLang.addOutPort(<div class="buttonr purple"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div>Java</div>);
    const prtLangPythonOut = boxLang.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Python</div>);
    const prtLangNetOut = boxLang.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> .Net</div>);
    const prtLangPhpOut = boxLang.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Php</div>);
    const prtLangNodeOut = boxLang.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Node.js</div>);
    const prtLangRubyOut = boxLang.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Kotlin</div>);
    boxLang.setPosition(320, -370);

    //2 - LIBS BOX
    const boxDevIDE = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 2 - {t('apresenta:roadmap.pakmangr')} </div></div>, "rgb(73, 67, 84)");
    const prtDevIDEVscodeIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /> </div>VsCode</div>);
    const prtDevIDESpyderIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Spyder</div>);
    const prtDevIDEPipIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Pip</div>);
    const prtDevIDEJupyterIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Jupyter</div>);
    const prtDevIDEVimIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Vim</div>);
    const prtDevIDEkateIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>kate</div>);
    const prtDevIDENetbeansIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Netbeans</div>);
    const prtDevIDEEclipseIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Eclipse</div>);
    const prtDevIDEComposerIn = boxDevIDE.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Composer</div>);
    const prtDevIDECNpmIn = boxDevIDE.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Npm</div>);
    const prtDevIDEGemsIn = boxDevIDE.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>IntellijIDE</div>);
    const prtDevIDEMavenIn = boxDevIDE.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Maven</div>);
    const prtDEVsIDEOut = boxDevIDE.addOutPort(" ");
    boxDevIDE.setPosition(870, -390);


    //3 - Box DB 
    const boxDevDb = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespacemini"><i className="fa fa-flag fa-1x" /> 3 - {t('apresenta:roadmap.sqldbs')} </div></div>, "rgb(73, 67, 84)");
    const prtDbIn = boxDevDb.addInPort(" ");
    const prtDbOut = boxDevDb.addOutPort(" ");
    const prtDbOut0 = boxDevDb.addOutPort(<div class="buttonr purple"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div> MySql</div>);
    const prtDbOut1 = boxDevDb.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> MariaDB</div>);
    const prtDbOut2 = boxDevDb.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> SqLite</div>);
    const prtDbOut4 = boxDevDb.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>  Mssql</div>);
    const prtDbOut6 = boxDevDb.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Firebase</div>);
    const prtDbOut7 = boxDevDb.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Oracle</div>);
    const prtDBtag1 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> ORMs</div>);
    const prtDBtag2 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> ACID</div>);
    const prtDBtag3 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.sqltrans')}</div>);
    const prtDBtag4 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.n1prob')}</div>);
    const prtDBtag5 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.datreplic')}</div>);
    const prtDBtag6 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.sqlshard')}</div>);
    const prtDBtag7 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.sqlcap')}</div>);
    const prtDBtag8 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.sqlnorm')}</div>);
    const prtDBtag9 = boxDevDb.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.sqlindex')}</div>);
    boxDevDb.setPosition(1220, -370);

    //4 - Box Boa Praticas 
    const boxStdds = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 4 - {t('apresenta:roadmap.gptitle')}</div></div>, "rgb(73, 67, 84)");
    const prtStddsIn = boxStdds.addInPort(" ");
    const prtStddsOut = boxStdds.addOutPort(" ");
    const prtStddstag1 = boxStdds.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gpstds')} </div>);
    const prtStddstag2 = boxStdds.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gpclean')} </div>);
    const prtStddstag3 = boxStdds.addInPort(<div class="buttontag"><i className="fa fa-tag " /> Scrum   </div>);
    const prtStddstag4 = boxStdds.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gptestdriv')} </div>);
    const prtStddstag5 = boxStdds.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gprefact')} </div>);
    const prtStddstag6 = boxStdds.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gpdesignpatt')} </div>);
    const prtStddstag7 = boxStdds.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gpoopsh')} </div>);
    const prtStddstag8 = boxStdds.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gplifecic')}</div>);
    const prtStddstag9 = boxStdds.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gpscal')}</div>);
    const prtStddstag10 = boxStdds.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> OWASP</div>);
    const prtStddstag11 = boxStdds.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gptest')}</div>);
    boxStdds.setPosition(1280, -730);


    //4.1 - Practice 
    const boxPractice = new DefaultNodeModel(<div class="buttonc red"><div class="buttonc bluespace"><i className="fab fa-python zoom fa-1x" />  {t('apresenta:roadmap.pract')}</div></div>, "rgb(73, 67, 84)");
    const prtPractsIn = boxPractice.addInPort(" ");
    const prtPractstag1 = boxPractice.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.makepak')} </div>);
    const prtPracttag2 = boxPractice.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.contrib')} </div>);
    const prtPracttag3 = boxPractice.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.verssys')}   </div>);
    const prtPracttag5 = boxPractice.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> GitHub</div>);
    const prtPractsOut = boxPractice.addOutPort(" ");
    boxPractice.setPosition(880, -610);

    //3.1 - NoSql
    const NoSql = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespacemini"><i className="fa fa-flag fa-1x" /> 3.1 - {t('apresenta:roadmap.nosqldbs')}  </div></div>, "rgb(73, 67, 84)");
    const prtNoSqlIn = NoSql.addInPort(" ");
    const prtNoSqltag1 = NoSql.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Cassandra</div>);
    const prtNoSqltag2 = NoSql.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> MongoDb</div>);
    const prtNoSqltag3 = NoSql.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Redis</div>);
    const prtNoSqltag4 = NoSql.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Oracle NoSQL</div>);
    const prtNoSqltag5 = NoSql.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> DynamoDB</div>);
    const prtNoSqltag6 = NoSql.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Couchbase</div>);
    const prtNoSqltag7 = NoSql.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> IBM CLoudant</div>);
    const prtNoSqlOut = NoSql.addOutPort(" ");
    NoSql.setPosition(1680, -640);

    //5 - API
    const boxApi = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespacemini"><i className="fa fa-flag fa-1x" /> 5 - APIs </div></div>, "rgb(73, 67, 84)");
    const prtApiIn = boxApi.addInPort(" ");
    const prtApiOut = boxApi.addOutPort(" ");
    const prtApiOut0 = boxApi.addOutPort(<div class="buttonr purple"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div> Rest</div>);
    const prtApiOut1 = boxApi.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Json</div>);
    const prtApiOut2 = boxApi.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Soap</div>);
    const prtApiOut4 = boxApi.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>  HATEOAS</div>);
    const prtApiOut6 = boxApi.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Open Api / Swagger</div>);
    const prtApiOut7 = boxApi.addOutPort(<div class="buttonr purpleinactive"><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Authenticator</div>);
    const prtApitag1 = boxApi.addInPort(<div class="buttontag"><i className="fa fa-tag " /> ORMs</div>);
    boxApi.setPosition(880, -900);

    //5.1 - Authentication 
    const prtAuth = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 5.1 - {t('apresenta:roadmap.auth')} </div></div>, "rgb(73, 67, 84)");
    const prtAuthIn = prtAuth.addInPort(" ");
    const prtAuthOut = prtAuth.addOutPort(" ");
    const prtAuth1Out = prtAuth.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> {t('apresenta:roadmap.cook')}</div>);
    const prtAuth2Out = prtAuth.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>OAuth</div>);
    const prtAuth3Out = prtAuth.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> {t('apresenta:roadmap.authbase')}</div>);
    const prtAuth4Out = prtAuth.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> Token</div>);
    const prtAuth5Out = prtAuth.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Jwt</div>);
    const prtAuth6Out = prtAuth.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> OpenId</div>);
    const prtAuth7Out = prtAuth.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> SAML</div>);
    prtAuth.setPosition(520, -720);

    //6 - Caching 
    const prtcache = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 6 - {t('apresenta:roadmap.cachin')} </div></div>, "rgb(73, 67, 84)");
    const prtcacheIn = prtcache.addInPort(" ");
    const prtcacheOut = prtcache.addOutPort(" ");
    const prtcache1Out = prtcache.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>CDN</div>);
    const prtcache2Out = prtcache.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> {t('apresenta:roadmap.servsid')}</div>);
    const prtcache3Out = prtcache.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> {t('apresenta:roadmap.clientsid')}</div>);
    const prtcache1in = prtcache.addInPort(<div class="buttontag"><i className="fa fa-tag " /> Redis</div>);
    const prtcache2In = prtcache.addInPort(<div class="buttontag"><i className="fa fa-tag " /> MenCached</div>);
    prtcache.setPosition(490, -930);

    // 7 - Web Security
    const prtwebsec = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 7 - {t('apresenta:roadmap.websec')}</div></div>, "rgb(73, 67, 84)");
    const prtwebsecIn = prtwebsec.addInPort(" ");
    const prtwebsecOut = prtwebsec.addOutPort(" ");
    const prtwebsec1Out = prtwebsec.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Https</div>);
    const prtwebsec2Out = prtwebsec.addOutPort(<div class="buttonr purple"  ><div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw" /></div> {t('apresenta:roadmap.hashalg')}</div>);
    const prtwebsec3Out = prtwebsec.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> {t('apresenta:roadmap.csp')}</div>);
    const prtwebsec4Out = prtwebsec.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>SSl/TLS</div>);
    const prtwebsec5Out = prtwebsec.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> OWASP</div>);
    const prtwebsec6Out = prtwebsec.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> CORS</div>);
    prtwebsec.setPosition(640, -1220);

    //8 - Testing
    const prttesting = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespacemini"><i className="fa fa-flag fa-1x" /> 8 - {t('apresenta:roadmap.devtesting')}</div></div>, "rgb(73, 67, 84)");
    const prttestingIn = prttesting.addInPort(" ");
    const prttestingOut = prttesting.addOutPort(" ");
    const prttesting1Out = prttesting.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>  {t('apresenta:roadmap.integtest')}</div>);
    const prttesting2Out = prttesting.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>  {t('apresenta:roadmap.servunittest')}</div>);
    const prttesting3Out = prttesting.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> {t('apresenta:roadmap.functtest')}</div>);
    prttesting.setPosition(1010, -1140);

    //8 - Ci / CD
    const prtcicd = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 9 - CI / CD <i className="fa fa-chevron-right fa-1x fa-blank " /></div></div>, "rgb(73, 67, 84)");
    const prtcicdIn = prtcicd.addInPort(" ");
    const prtcicdOut = prtcicd.addOutPort(" ");
    const prtcicdIntag = prtcicd.addInPort(<div class="buttontag"><i className="fa fa-tag " /> Full Cycle</div>);
    const pprtcicdInout = prtcicd.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>SonarQube</div>);
    const pprtcicdIn2 = prtcicd.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>GitHub Actions</div>);
    prtcicd.setPosition(1290, -1000);

    //10 - Development Principles
    const prtdevPrinc = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 10 - {t('apresenta:roadmap.devprincipl')}</div></div>, "rgb(73, 67, 84)");
    const prtdevPrincIn = prtdevPrinc.addInPort(" ");
    const prtdevPrincOut = prtdevPrinc.addOutPort(" ");
    const prtdevPrinc1Out = prtdevPrinc.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.gofpatt')}</div>);
    const prtdevPrinc2Out = prtdevPrinc.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.domaindesig')}</div>);
    const prtdevPrinc3Out = prtdevPrinc.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.testdrivdv')}</div>);
    const prtdevPrinc4Out = prtdevPrinc.addInPort(<div class="buttontag"><i className="fa fa-tag " /> SOLID</div>);
    const prtdevPrinc5Out = prtdevPrinc.addInPort(<div class="buttontag"><i className="fa fa-tag " /> KISS</div>);
    const prtdevPrinc6Out = prtdevPrinc.addInPort(<div class="buttontag"><i className="fa fa-tag " /> YAGNI</div>);
    const prtdevPrinc7Out = prtdevPrinc.addInPort(<div class="buttontag"><i className="fa fa-tag " /> DRY</div>);
    prtdevPrinc.setPosition(1470, -1070);

    //10.1 - Architectural Patterns
    const prtarchpatt = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 10.1 - {t('apresenta:roadmap.archpatt')}</div></div>, "rgb(73, 67, 84)");
    const prtarchpattIn = prtarchpatt.addInPort(" ");
    const prtarchpattOut = prtarchpatt.addOutPort(" ");
    const prtarchpatt1Out = prtarchpatt.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.monolith')} Patterns</div>);
    const prtarchpatt2Out = prtarchpatt.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.microservdsgn')}</div>);
    const prtarchpatt3Out = prtarchpatt.addInPort(<div class="buttontag"><i className="fa fa-tag " /> SOA </div>);
    const prtarchpatt4Out = prtarchpatt.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.cqrs')}</div>);
    const prtarchpatt5Out = prtarchpatt.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.servless')}</div>);
    prtarchpatt.setPosition(1830, -1070);

    //11 - Search Engine
    const prtSearchEng = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 11 - {t('apresenta:roadmap.searcheng')}</div></div>, "rgb(73, 67, 84)");
    const prtSearchEngIn = prtSearchEng.addInPort(" ");
    const prtSearchEngOut = prtSearchEng.addOutPort(" ");
    const prtSearchEng1Out = prtSearchEng.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> ElasticSearch</div>);
    const prtSearchEng2Out = prtSearchEng.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Solr</div>);
    prtSearchEng.setPosition(1930, -1240);

    //12 - Message Brokers
    const prtMsgBrok = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespacemini"><i className="fa fa-flag fa-1x" /> 12 - Message Brokers</div></div>, "rgb(73, 67, 84)");
    const prtMsgBrokIn = prtMsgBrok.addInPort(" ");
    const prtMsgBrokOut = prtMsgBrok.addOutPort(" ");
    const prtMsgBrokOutn = prtMsgBrok.addInPort(<div class="buttontag"><i className="fa fa-tag " /> AMPQ</div>);
    const prtMsgBrok1Out = prtMsgBrok.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> RabbitMQ</div>);
    const prtMsgBrok2Out = prtMsgBrok.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Kafka</div>);
    prtMsgBrok.setPosition(1530, -1230);

    //13 - Conteiners Vs VMs
    const prtContainer = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 13 - Conteiners Vs VMs</div></div>, "rgb(73, 67, 84)");
    const prtContainerIn = prtContainer.addInPort(" ");
    const prtContainerOut = prtContainer.addOutPort(" ");
    const prtContainer1Out = prtContainer.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Docker</div>);
    const prtContainer2Out = prtContainer.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Kubernetes</div>);
    const prtContainer3Out = prtContainer.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Hypervisor</div>);
    const prtContainer4Out = prtContainer.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Vsphere</div>);
    prtContainer.setPosition(1260, -1340);

    //14 - GraphQL
    const prtGraphQL = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 14 - GraphQL</div></div>, "rgb(73, 67, 84)");
    const prtGraphQLIn = prtGraphQL.addInPort(" ");
    const prtGraphQLOut = prtGraphQL.addOutPort(" ");
    const prtGraphQL2Out = prtGraphQL.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Apollo</div>);
    const prtGraphQL3Out = prtGraphQL.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>relay Modern</div>);
    prtGraphQL.setPosition(1030, -1350);

    //15 - Graph Database
    const prtGraphDB = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 15 - {t('apresenta:roadmap.graphdb')}</div></div>, "rgb(73, 67, 84)");
    const prtGraphDBIn = prtGraphDB.addInPort(" ");
    const prtGraphDBOut = prtGraphDB.addOutPort(" ");
    const prtGraphDB2Out = prtGraphDB.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Neo4j</div>);
    const prtGraphDB4Out = prtGraphDB.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Amazon Neptune</div>);
    prtGraphDB.setPosition(730, -1400);

    //16 - Web Socket
    const prtWebSocket = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 16 - Web Socket</div></div>, "rgb(73, 67, 84)");
    const prtWebSocketIn = prtWebSocket.addInPort(" ");
    const prtWebSocketOut = prtWebSocket.addOutPort(" ");
    prtWebSocket.setPosition(1030, -1500);

    //17 - Web Servers
    const prtWebServers = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 17 - {t('apresenta:roadmap.webservs')}</div></div>, "rgb(73, 67, 84)");
    const prtWebServersIn = prtWebServers.addInPort(" ");
    const prtWebServersOut = prtWebServers.addOutPort(" ");
    const prtWebServers2Out = prtWebServers.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>NNgynx</div>);
    const prtWebServers3Out = prtWebServers.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Apache</div>);
    const prtWebServers4Out = prtWebServers.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Caddy</div>);
    const prtWebServers5Out = prtWebServers.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Ms IIS</div>);
    prtWebServers.setPosition(1330, -1550);

    //18 - Building for Scale
    const prtScaling = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 18 - {t('apresenta:roadmap.buildscal')}</div></div>, "rgb(73, 67, 84)");
    const prtScalingIn = prtScaling.addInPort(" ");
    const prtScalingOut = prtScaling.addOutPort(" ");
    const prtScaling2Out = prtScaling.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.migratestrat')}</div>);
    const prtScaling3Out = prtScaling.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.hvsvscal')}</div>);
    const prtScaling4Out = prtScaling.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.observblt')}</div>);
    const prtScaling5Out = prtScaling.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Ms IIS</div>);
    const prtScalingIn6 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.instrum')}</div>);
    const prtScalingIn7 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.monitng')}</div>);
    const prtScalingIn8 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />T{t('apresenta:roadmap.telemtr')}</div>);
    const prtScalingIn1 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.throtlng')}</div>);
    const prtScalingIn2 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.gracedegrad')}</div>);
    const prtScalingIn3 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.backpress')}</div>);
    const prtScalingIn4 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.loadshift')}</div>);
    const prtScalingIn5 = prtScaling.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.circuitbreak')}</div>);
    prtScaling.setPosition(1680, -1640);

    //19 - Kkep Learning
    const prtKeepLearning = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> {t('apresenta:roadmap.keeplearn')}</div></div>, "rgb(73, 67, 84)");
    const prtKeepLearningIn = prtKeepLearning.addInPort(" ");
    prtKeepLearning.setPosition(2280, -1560);

    //1 - Basics  
    const prtBasics = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespacemini"><i className="fa fa-flag fa-1x" /> 1 -  {t('apresenta:roadmap.fronbasics')}</div></div>, "rgb(73, 67, 84)");
    const prtBasicsIn = prtBasics.addInPort(" ");
    const prtBasicsOut = prtBasics.addOutPort(" ");
    const prtBasicsIn1 = prtBasics.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>HTML</div>);
    const prtBasicsJavascriptIn = prtBasics.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Javascript</div>);
    const prtBasicsCssIn = prtBasics.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> CSS</div>);
    prtBasics.setPosition(70, -410);


    //1.1 - CSS
    const boxCss = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 1.1 - CSS </div></div>, "rgb(73, 67, 84)");
    const prtCssIn = boxCss.addInPort(" ");
    const prtCssOut = boxCss.addOutPort(" ");
    const prtCssCOut = boxCss.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.makelayouts')}</div>);
    const prtCss1In = boxCss.addOutPort(<div class="buttontag"><i className="fa fa-tag " />Floats</div>);
    const prtCss2In = boxCss.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.cssposit')}</div>);
    const prtCss3In = boxCss.addOutPort(<div class="buttontag"><i className="fa fa-tag " />Display</div>);
    const prtCss4In = boxCss.addOutPort(<div class="buttontag"><i className="fa fa-tag " />Box Model</div>);
    const prtCss5In = boxCss.addOutPort(<div class="buttontag"><i className="fa fa-tag " />CSS Grid</div>);
    const prtCss6In = boxCss.addOutPort(<div class="buttontag"><i className="fa fa-tag " />Flex Box</div>);
    const prtCss1Out = boxCss.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Media Queries</div>);
    const prtCss7In = boxCss.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.cssarch')}</div>);
    const prtCss8Out = boxCss.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>BEM</div>);
    const prtCss8In = boxCss.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.csspreprocess')}</div>);
    const prtCss9Out = boxCss.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Sass</div>);
    const prtCss10Out = boxCss.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>PostCss</div>);
    const prtCssOut0 = boxCss.addOutPort(" ");
    boxCss.setPosition(-480, -460);

    //1.2 - Javascript
    const boxJavaScript = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespacemini"><i className="fa fa-flag fa-1x" /> 1.2 - Javascript </div></div>, "rgb(73, 67, 84)");
    const prtJavascriptIn = boxJavaScript.addInPort(" ");
    const prtJavascriptOut = boxJavaScript.addOutPort(" ");
    const prtJavascript2Out = boxJavaScript.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Fetch API/AJAX</div>);
    const prtJavascriptCOut = boxJavaScript.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div> E{t('apresenta:roadmap.es6mod')}</div>);
    const prtJavascript1In = boxJavaScript.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> Hosting</div>);
    const prtJavascript2In = boxJavaScript.addOutPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.jseventbub')}</div>);
    const prtJavascript3In = boxJavaScript.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.jsscope')}</div>);
    const prtJavascript4In = boxJavaScript.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.prototype')}</div>);
    const prtJavascript5In = boxJavaScript.addOutPort(<div class="buttontag"><i className="fa fa-tag " />Shadow DOM</div>);
    const prtJavascript6In = boxJavaScript.addOutPort(<div class="buttontag"><i className="fa fa-tag " />Strict</div>);
    const prtJavascript1Out = boxJavaScript.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.dommanip')}</div>);
    const prtJavascript4Out = boxJavaScript.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Typescript</div>);
    const prtJavascript5Out = boxJavaScript.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Flow</div>);
    const prtJavascriptOut0 = boxJavaScript.addOutPort(" ");
    boxJavaScript.setPosition(-440, -950);

    //2- Version Control System 
    const prtCVS = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 2 - {t('apresenta:roadmap.vcs')} </div></div>, "rgb(73, 67, 84)");
    const prtCVSIn = prtCVS.addInPort(" ");
    const prtCVSOut = prtCVS.addOutPort(" ");
    const prtCVSIn2 = prtCVS.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>GitHub</div>);
    const prtCVSHTMLIn = prtCVS.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> gitLab</div>);
    const prtCVSCSSIn3 = prtCVS.addInPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>Bitbucket</div>);
    prtCVS.setPosition(70, -660);


    //3 - Learn Security
    const prtSecFront = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 3 - {t('apresenta:roadmap.learnsec')} </div></div>, "rgb(73, 67, 84)");
    const prtSecFrontIn = prtSecFront.addInPort(" ");
    const prtSecFrontOut = prtSecFront.addOutPort(" ");
    const prtSecFrontSecIn = prtSecFront.addOutPort(<div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>{t('apresenta:roadmap.secbase')}</div>);
    prtSecFront.setPosition(70, -830);

    //4 -  Package Manager
    const prtPackaMngr = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 4 -  {t('apresenta:roadmap.pakmanagr')}</div></div>, "rgb(73, 67, 84)");
    const prtPackaMngrIn = prtPackaMngr.addInPort(" ");
    const prtPackaMngrOut = prtPackaMngr.addOutPort(" ");
    const prtPackaMngr2In = prtPackaMngr.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Npm</div>);
    const prtPackaMngr3n = prtPackaMngr.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Yarn</div>);
    prtPackaMngr.setPosition(70, -1030);

    //4 -  Build Tools
    const prtBuildTools = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 5 -  {t('apresenta:roadmap.buildtools')}</div></div>, "rgb(73, 67, 84)");
    const prtBuildToolsIn = prtBuildTools.addInPort(" ");
    const prtBuildToolsOut = prtBuildTools.addOutPort(" ");
    const prtBuildTools1In = prtBuildTools.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.taskrunn')}</div>)
    const prtBuildTools2In = prtBuildTools.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.npmscripts')}</div>);
    const prtBuildTools3In = prtBuildTools.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Gulp</div>);
    const prtBuildTools13In = prtBuildTools.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Grunt</div>);
    const prtBuildTools4In = prtBuildTools.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.bundlers')}</div>)
    const prtBuildTools5In = prtBuildTools.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>WebPack</div>);
    const prtBuildTools6In = prtBuildTools.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Roolup</div>);
    const prtBuildTools7In = prtBuildTools.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Parcel</div>);
    const prtBuildTools16In = prtBuildTools.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.lintfromatt')}</div>)
    const prtBuildTools9In = prtBuildTools.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Prettier</div>);
    const prtBuildTools10In = prtBuildTools.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>EsLint</div>);
    const prtBuildTools11In = prtBuildTools.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>StandardJs</div>);
    prtBuildTools.setPosition(200, -1420);

    //6 -  Choose Framework
    const prtframWrk = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 6 -  {t('apresenta:roadmap.choosfrmwork')}</div></div>, "rgb(73, 67, 84)");
    const prtframWrkIn = prtframWrk.addInPort(" ");
    const prtframWrkOut = prtframWrk.addOutPort(" ");
    const prtframWrkAngIn = prtframWrk.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Angular</div>);
    const prtframWrkVueIn = prtframWrk.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Vue</div>);
    const prtframWrkReactIn = prtframWrk.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>React.Js</div>);
    prtframWrk.setPosition(-80, -1250);

    //  React
    const prtReact = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> React</div></div>, "rgb(73, 67, 84)");
    const prtReactIn = prtReact.addInPort(" ");
    const prtReactOut = prtReact.addOutPort(" ");
    const prtReact2In = prtReact.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Redux</div>);
    const prtReact3n = prtReact.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Mobx</div>);
    const prtReact4n = prtReact.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Flux</div>);
    prtReact.setPosition(-350, -1130);

    //  Vue
    const prtVue = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> Vue</div></div>, "rgb(73, 67, 84)");
    const prtVueIn = prtVue.addInPort(" ");
    const prtVueOut = prtVue.addOutPort(" ");
    const prtVue2In = prtVue.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Vuex</div>);
    prtVue.setPosition(-490, -1190);

    //  Angular
    const prtAng = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> Angular</div></div>, "rgb(73, 67, 84)");
    const prtAngIn = prtAng.addInPort(" ");
    const prtAngOut = prtAng.addOutPort(" ");
    const prtAng2In = prtAng.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>RxJS</div>);
    const prtAng3n = prtAng.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>NgRx</div>);
    prtAng.setPosition(-360, -1310);

    //7 -  Js in Css
    const prtJsinCss = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 7 - {t('apresenta:roadmap.jsincss')}</div></div>, "rgb(73, 67, 84)");
    const prtJsinCssIn = prtJsinCss.addInPort(" ");
    const prtJsinCssOut = prtJsinCss.addOutPort(" ");
    const prtJsinCss2In = prtJsinCss.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Emotion</div>);
    const prtJsinCss3n = prtJsinCss.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Radium</div>);
    const prtJsinCss4n = prtJsinCss.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Styled-Components</div>);
    const prtJsinCss5n = prtJsinCss.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Jss</div>);
    prtJsinCss.setPosition(-80, -1520);


    //8 - Testing 
    const prttestfr = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 8 - {t('apresenta:roadmap.testing')}</div></div>, "rgb(73, 67, 84)");
    const prttestfrIn = prttestfr.addInPort(" ");
    const prttestfrOut = prttestfr.addOutPort(" ");
    const prttestfr2In = prttestfr.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Jest</div>);
    const prttestfr3n = prttestfr.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Cypress</div>);
    const prttestfr4n = prttestfr.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Enzyme</div>);
    const prttestfr5n = prttestfr.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>React-Testing-library</div>);
    const prttestfr6In = prttestfr.addInPort(<div class="buttontag"><i className="fa fa-tag " /> {t('apresenta:roadmap.unitintegfunct')}  </div>);
    const prttestfr7In = prttestfr.addInPort(<div class="buttontag"><i className="fa fa-tag " /> Mocha, Chai, Ava, jasmine   </div>);
    prttestfr.setPosition(-580, -1660);

    //9 -   Web Components
    const prtWevComp = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 9 -  {t('apresenta:roadmap.webcomp')}</div></div>, "rgb(73, 67, 84)");
    const prtWevCompIn = prtWevComp.addInPort(" ");
    const prtWevCompOut = prtWevComp.addOutPort(" ");
    const prtWevComp2In = prtWevComp.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.htmltemplt')}</div>);
    const prtWevComp3n = prtWevComp.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.customelem')}</div>);
    const prtWevComp4n = prtWevComp.addOutPort(<div class="buttontag"><i className="fa fa-tag " />Shadow DOM</div>);
    prtWevComp.setPosition(-80, -1720);

    //10 -  CSS Frameworks
    const prtCssFrmWrks = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 10 -  {t('apresenta:roadmap.cssframwrks')}</div></div>, "rgb(73, 67, 84)");
    const prtCssFrmWrksIn = prtCssFrmWrks.addInPort(" ");
    const prtCssFrmWrksOut = prtCssFrmWrks.addOutPort(" ");
    const prtCssFrmWrks1In = prtCssFrmWrks.addInPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.jsbuiltin')}</div>)
    const prtCssFrmWrks2In = prtCssFrmWrks.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>ReactStraps</div>);
    const prtCssFrmWrks3In = prtCssFrmWrks.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>MaterialUi</div>);
    const prtCssFrmWrks13In = prtCssFrmWrks.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>TailWindCss</div>);
    const prtCssFrmWrks4In = prtCssFrmWrks.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>ChackraUi</div>)
    const prtCssFrmWrks16In = prtCssFrmWrks.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.externals')}</div>)
    const prtCssFrmWrks9In = prtCssFrmWrks.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Bootstrap</div>);
    const prtCssFrmWrks10In = prtCssFrmWrks.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Materialize Css</div>);
    const prtCssFrmWrks11In = prtCssFrmWrks.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Bulma</div>);
    prtCssFrmWrks.setPosition(220, -1720);

    //11 -  Progressive Web Apps
    const prtPWA = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc bluespace"><i className="fa fa-flag fa-1x" /> 11 -  {t('apresenta:roadmap.pwa')}</div></div>, "rgb(73, 67, 84)");
    const prtPWAIn = prtPWA.addInPort(" ");
    const prtPWAOut = prtPWA.addOutPort(" ");
    const prtPWA1In = prtPWA.addInPort(<div class="buttontag"><i className="fa fa-tag " />Apis</div>)
    const prtPWA2In = prtPWA.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.storagewpa')}</div>);
    const prtPWA3In = prtPWA.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.websockwpa')}</div>);
    const prtPWA4In = prtPWA.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.wpanotif')}</div>);
    const prtPWA5In = prtPWA.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.deviceorient')}</div>);
    const prtPWA6In = prtPWA.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.pymnts')}</div>);
    const prtPWA7In = prtPWA.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.credent')}</div>);
    const prtPWA8In = prtPWA.addOutPort(<div class="buttontag"><i className="fa fa-tag " />{t('apresenta:roadmap.perform')}</div>)
    const prtPWA9In = prtPWA.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.prplpatt')}</div>);
    const prtPWA10In = prtPWA.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.railmod')}</div>);
    const prtPWA11In = prtPWA.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>{t('apresenta:roadmap.perfmetrics')}</div>);
    const prtPWA12In = prtPWA.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Lighthouse</div>);
    const prtPWA13In = prtPWA.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Dev Tools</div>);
    prtPWA.setPosition(670, -1830);

    //12 - Server Side Rendering (SSR)
    const prtSSR = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 12 - {t('apresenta:roadmap.servsiderend')} (SSR)</div></div>, "rgb(73, 67, 84)");
    const prtSSRIn = prtSSR.addInPort(" ");
    const prtSSROut = prtSSR.addOutPort(" ");
    const prtSSR1In = prtSSR.addInPort(<div class="buttontag"><i className="fa fa-tag " />React.Js</div>)
    const prtSSR2In = prtSSR.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Next.Js</div>);
    const prtSSR3In = prtSSR.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>After.js</div>);
    const prtSSR4In = prtSSR.addInPort(<div class="buttontag"><i className="fa fa-tag " />Angular</div>)
    const prtSSR5In = prtSSR.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Universal</div>);
    const prtSSR6In = prtSSR.addInPort(<div class="buttontag"><i className="fa fa-tag " />Vue.js</div>)
    const prtSSR7In = prtSSR.addInPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Nuxt.js</div>)
    prtSSR.setPosition(220, -2070);

    //14 - GraphQL
    const prtGraphQLFront = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 14 - GraphQL</div></div>, "rgb(73, 67, 84)");
    const prtGraphQLFrontIn = prtGraphQLFront.addInPort(" ");
    const prtGraphQLFront1Out = prtGraphQLFront.addOutPort(" ");
    const prtGraphQLFront2Out = prtGraphQLFront.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Apollo</div>);
    const prtGraphQLFront3Out = prtGraphQLFront.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>relay Modern</div>);
    prtGraphQLFront.setPosition(-70, -1920);

    //15 - Static Site Generators
    const prtSSGen = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 15 - {t('apresenta:roadmap.stsitegen')}</div></div>, "rgb(73, 67, 84)");
    const prtSSGenIn = prtSSGen.addInPort(" ");
    const prtSSGenOut = prtSSGen.addOutPort(" ");
    const prtSSGen2Out = prtSSGen.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Next.js</div>);
    const prtSSGen3Out = prtSSGen.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Gatsby.js</div>);
    const prtSSGen4Out = prtSSGen.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>nuxt.js</div>);
    const prtSSGen5Out = prtSSGen.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>VuePress</div>);
    const prtSSGen6Out = prtSSGen.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Jekyll</div>);
    const prtSSGen7Out = prtSSGen.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Hugo</div>);
    prtSSGen.setPosition(-370, -2020);

    //16 - Desktop Aplications
    const prtdeskt = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 16 - {t('apresenta:roadmap.desktapps')}</div></div>, "rgb(73, 67, 84)");
    const prtdesktIn = prtdeskt.addInPort(" ");
    const prtdesktOut = prtdeskt.addOutPort(" ");
    const prtdeskt2Out = prtdeskt.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Electron</div>);
    const prtdeskt3Out = prtdeskt.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Carlo</div>);
    const prtdeskt4Out = prtdeskt.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Proton native</div>);
    const prtdeskt5Out = prtdeskt.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Ionic</div>);
    prtdeskt.setPosition(-670, -2120);

    //17 - Mobile Aplications
    const prtmob = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 16 - {t('apresenta:roadmap.mobapps')}</div></div>, "rgb(73, 67, 84)");
    const prtmobIn = prtmob.addInPort(" ");
    const prtmobOut = prtmob.addOutPort(" ");
    const prtmob2Out = prtmob.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>React native</div>);
    const prtmob3Out = prtmob.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>nativeScript</div>);
    const prtmob4Out = prtmob.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Flutter</div>);
    const prtmob5Out = prtmob.addOutPort(<div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>Ionic</div>);
    prtmob.setPosition(-670, -2370);

    //18 - Web Assembly
    const prtdWebAssemb = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 16 - Web Assembly</div></div>, "rgb(73, 67, 84)");
    const prtdWebAssembIn = prtdWebAssemb.addInPort(" ");
    const prtdWebAssembOut = prtdWebAssemb.addOutPort(" ");
    prtdWebAssemb.setPosition(-370, -2370);

    //19 - Keep Learning
    const prtKepLearnFr = new DefaultNodeModel(<div class="buttonc yellow"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> 16 - {t('apresenta:roadmap.keeplearning')}</div></div>, "rgb(73, 67, 84)");
    const prtKepLearnFrIn = prtKepLearnFr.addInPort(" ");
    const prtKepLearnFrOut = prtKepLearnFr.addOutPort(" ");
    prtKepLearnFr.setPosition(-70, -2370);

    // create links
    const linkDataScienceApd = prtMathOut.link(prtIAOutin);
    const linkApdPandas = prtApdPython.link(prtPandasIn);
    const linkApdNumpy = prtApdPython.link(prtNumpyIn);
    const linkDataScienceMath = prtIAOut.link(prtMathIn);
    const linkCentroDataScience = prt4.link(prtIAIn);
    const linkApdSttcs = prtApdOut.link(prtSttcsIn);
    const linkStatsData = prtSttcsOut.link(prtDtWrnglsIn);
    const linkDataVsulztn = prtDtWrnglOut.link(prtVsulztnIn);
    const linkVisML = prtVsulztnOut.link(prtMLIn);
    const linkMLDL = prtMLOut.link(prtDLIn);
    const linkDlBigData = prtDLOut.link(prtBigDataIn);
    const linkCentroDev = prt2.link(prtDevIn);
    const linkDevBack = prtDevOut.link(prtBackIn);
    const linkDevFront = prtDevOut2.link(prtFrontIn);
    const linkbackLang = prtBackOut.link(prtLangIn);
    const linkIDEsSpy = prtLangPythonOut.link(prtDevIDESpyderIn);
    const linkIDEsPip = prtLangPythonOut.link(prtDevIDEPipIn);
    const linkIDEsJup = prtLangPythonOut.link(prtDevIDEJupyterIn);
    const linkIDEsVim = prtLangPythonOut.link(prtDevIDEVimIn);
    const linkIDEsNetbeans = prtLangJavaOut.link(prtDevIDENetbeansIn);
    const linkIDEskatepy = prtLangPythonOut.link(prtDevIDEkateIn);
    const linkIDEsEclipse = prtLangJavaOut.link(prtDevIDEEclipseIn);
    const linkIDEsNpm = prtLangNodeOut.link(prtDevIDECNpmIn);
    const linkIDEsGems = prtLangRubyOut.link(prtDevIDEGemsIn);
    const linkIDEsComposer = prtLangPhpOut.link(prtDevIDEComposerIn);
    const linkIDEsphpKate = prtLangPhpOut.link(prtDevIDEkateIn);
    const linkIDEsCVscode = prtLangCOut.link(prtDevIDEVscodeIn);
    const linkIDEsNetVscode = prtLangNetOut.link(prtDevIDEVscodeIn);
    const linkIDEsjavaMaven = prtLangJavaOut.link(prtDevIDEMavenIn);
    const linkIDEsDb = prtDEVsIDEOut.link(prtDbIn);
    const linkStdDb = prtDbOut.link(prtStddsIn);
    const linkGoodPrac = prtStddsOut.link(prtPractsIn);
    const linkSqlNosql = prtDbOut.link(prtNoSqlIn);
    const linkLangPractice = prtLangOut.link(prtPractsIn);
    const linkStdApi = prtStddsOut.link(prtApiIn);
    const linkAuthApi = prtAuthOut.link(prtApiIn);
    const linkCacheApi = prtcacheOut.link(prtApiIn);
    const linkcacheWebSec = prtcacheOut.link(prtwebsecIn);
    const linkWebSecTest = prtwebsecOut.link(prttestingIn);
    const linkTestCicd = prttestingOut.link(prtcicdIn);
    const linkCicdPrinc = prtcicdOut.link(prtdevPrincIn);
    const linkDevPrinArchPrinc = prtdevPrincOut.link(prtarchpattIn);
    const linkDevPrincSearc = prtdevPrincOut.link(prtSearchEngIn);
    const linkSearchMsgB = prtSearchEngOut.link(prtMsgBrokIn);
    const linkSearchContai = prtMsgBrokOut.link(prtContainerIn);
    const linkGrapgqlVMs = prtContainerOut.link(prtGraphQLIn);
    const linkGraphQlWebSoc = prtGraphQLOut.link(prtGraphDBIn);
    const linkGraphDbWebsoc = prtGraphDBOut.link(prtWebSocketIn);
    const linkWebSocWebServ = prtWebSocketOut.link(prtWebServersIn);
    const linkWebServScale = prtWebServersOut.link(prtScalingIn);
    const linkKeepScale = prtScalingOut.link(prtKeepLearningIn);
    const linkDrontBasics = prtFrontOut.link(prtBasicsIn);
    const linkCssBasics = prtCssOut0.link(prtBasicsCssIn);
    const linkBasicJs = prtJavascriptOut0.link(prtBasicsJavascriptIn);
    const linkCssCvs = prtCssOut.link(prtCVSIn);
    const linkJsCvs = prtJavascriptOut.link(prtCVSIn);
    const linkCvsSecWeb = prtCVSOut.link(prtSecFrontIn);
    const linkWebSecApd = prtSecFrontSecIn.link(prtwebsecIn);
    const linkSecPack = prtSecFrontOut.link(prtPackaMngrIn);
    const linkPackBuild = prtPackaMngrOut.link(prtBuildToolsIn);
    const linkFramewBuild = prtBuildToolsOut.link(prtframWrkIn);
    const linkFramwAng = prtAngOut.link(prtframWrkAngIn);
    const linkFramwVue = prtVueOut.link(prtframWrkVueIn);
    const linkFramwReact = prtReactOut.link(prtframWrkReactIn);
    const linbkFrmwJsinCss = prtframWrkOut.link(prtJsinCssIn);
    const linkJsinCssTest = prtJsinCssOut.link(prttestfrIn);
    const linkTestWebC = prttestfrOut.link(prtWevCompIn);
    const linkWebcCssFwks = prtWevCompOut.link(prtCssFrmWrksIn);
    const linkCssFrksPWA = prtCssFrmWrksOut.link(prtPWAIn);
    const lnkPWASSR = prtPWAOut.link(prtSSRIn);
    const linkSSRGraphQlF = prtSSROut.link(prtGraphQLFrontIn);
    const lnkGrapQlSSGen = prtGraphQLFront1Out.link(prtSSGenIn);
    const lnkSsgDa = prtSSGenOut.link(prtdesktIn);
    const lnkDaMob = prtdesktOut.link(prtmobIn);
    const lnkMobWebAss = prtmobOut.link(prtdWebAssembIn);
    const lnkWebkeep = prtdWebAssembOut.link(prtKepLearnFrIn);

    //4) add the models to the root graph
    model.addAll(centro, node1, boxApd, boxmath, boxPython, linkDataScienceApd, linkApdPandas, linkApdNumpy, linkDataScienceMath, linkCentroDataScience, boxSttcs, linkApdSttcs, boxDtWrngl, title, boxVsulztn, linkStatsData, linkDataVsulztn, boxML, linkVisML, boxDL, linkMLDL, boxBigData, linkDlBigData, boxProgStart, linkCentroDev, boxFrontend, boxBackend, linkDevBack, linkDevFront, boxLang, linkbackLang, boxDevIDE, linkIDEsSpy, linkIDEsPip, linkIDEsJup, linkIDEsVim, linkIDEsNetbeans, linkIDEskatepy, linkIDEsEclipse, linkIDEsNpm, linkIDEsGems, linkIDEsComposer, linkIDEsphpKate, linkIDEsCVscode, linkIDEsNetVscode, linkIDEsjavaMaven, boxDevDb, linkIDEsDb, boxStdds, linkStdDb, boxPractice, linkGoodPrac, NoSql, linkSqlNosql, linkLangPractice, boxApi, linkStdApi, prtAuth, linkAuthApi, prtcache, linkCacheApi, prtwebsec, prttesting, prtcicd, linkcacheWebSec, linkWebSecTest, linkTestCicd, prtdevPrinc, linkCicdPrinc, prtarchpatt, prtSearchEng, linkDevPrinArchPrinc, linkDevPrincSearc, prtMsgBrok, linkSearchMsgB, prtContainer, linkSearchContai, prtGraphQL, linkGrapgqlVMs, prtGraphDB, prtWebSocket, prtWebServers, prtScaling, prtKeepLearning, linkGraphQlWebSoc, linkWebSocWebServ, linkWebServScale, linkKeepScale, linkGraphDbWebsoc, prtBasics, linkDrontBasics, boxCss, linkCssBasics, boxJavaScript, linkBasicJs, prtCVS, linkCssCvs, linkJsCvs, prtSecFront, linkCvsSecWeb, linkWebSecApd, prtPackaMngr, linkSecPack, prtBuildTools, linkPackBuild, prtframWrk, prtReact, prtVue, prtAng, linkFramewBuild, linkFramwAng, linkFramwVue, linkFramwReact, prtJsinCss, linbkFrmwJsinCss, prttestfr, linkJsinCssTest, prtWevComp, prtCssFrmWrks, linkTestWebC, linkWebcCssFwks, prtPWA, linkCssFrksPWA, prtSSR, prtGraphQLFront, lnkPWASSR, linkSSRGraphQlF, prtSSGen, prtmob, prtdeskt, prtdWebAssemb, prtKepLearnFr, lnkGrapQlSSGen, lnkSsgDa, lnkDaMob, lnkMobWebAss, lnkWebkeep);

    /* ACTIVE
     * <div class="buttonr purple"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div>
     * INACTIVE
     * <div class="buttonr purpleinactive"  ><div class="buttonr greeninactive"><i className="ffa-li fa fa-square" /> </div>
     * TAG
     * <div class="buttontag"><i className="fa fa-tag " />
     * PREENCHIMENTO
     * <i  className="fa fa-chevron-right fa-1x fa-blank "  /><i  className="fa fa-blank fa-1x "  /><i  className="fa fa-blank fa-1x "  /></div></div>
     * botao orange
     * <div class="buttonr orange"><i className="fa fa-spinner fa-pulse fa-fw"/></div>
     */

    // load model into engine
    engine.setDiagramModel(model);


    // render the diagram!
    return <section id="myroadmap">< DiagramWidget className="srd-demo-canvas" diagramEngine={engine} allowLooseLinks={false} smartRouting={false} /></section>;
};
