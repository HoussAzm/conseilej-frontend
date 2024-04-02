const tableData = [
  {
    col1: "Prise en charge patrimoine",
    col2: "22% à 27%",
    col3: "Gestion complète du patrimoine. Tarification au pourcentage, de 22% jusqu'à 27% pour les actifs. Varie en fonction des spécificités et des besoins du client, couvrant la gestion, la surveillance et l'optimisation des actifs.",
  },
  {
    col1: "Prise en charge de la rentabilité",
    col2: "22% à 27%",
    col3: "Suivi régulier de la performance financière. Tarification basée sur le pourcentage des rendements. Inclut une analyse approfondie des rendements et des ajustements stratégiques en fonction des objectifs du client.",
  },
  {
    col1: "Suivie Complet au Pourcentage",
    col2: "Variable",
    col3: "Services de suivi complet au pourcentage. Tarification basée sur le pourcentage des actifs sous gestion. Inclut la gestion, la surveillance et l'optimisation continue du portefeuille en fonction des objectifs du client",
  },
  {
    col1: "Investissement - Étude de Projet",
    col2: "15000Є",
    col3: "Analyse approfondie d'un projet d'investissement. Inclut une évaluation de la faisabilité, des risques et des opportunités, ainsi que des recommandations pour optimiser le rendement ",
  },
  {
    col1: "Investissement - Business Plan",
    col2: "5000Є",
    col3: "Élaboration d'un business plan détaillé pour le projet d'investissement. Inclut une analyse financière, une stratégie de mise en œuvre et une évaluation des retours sur investissement prévus.",
  },
  {
    col1: "Investissement - Étude de Marche",
    col2: "5000Є",
    col3: "Analyse approfondie du marché pour évaluer la viabilité du projet d'investissement.Inclut une étude concurrentielle, une analyse des tendances du marché et recommandations pour maximiser la rentabilité.",
  },
  {
    col1: "Investissement - Étude Financiere",
    col2: "5000Є",
    col3: "Étude financière pour évaluer les aspects budgétaires et les projections financières du projet. Inclut des analyses de rentabilité , de coûtes et des scénarios financiers pour une prise de décision éclairée",
  },
  { col1: "PROJET", col2: "Variable", col3: "----" },
  {
    col1: "0 - 200KЄ",
    col2: "10%",
    col3: "Tarification au pourcentage , de 6% pour les projets de 0 à 200KЄ",
  },
  {
    col1: "200 KЄ - 600KЄ",
    col2: "10%",
    col3: "Tarification au pourcentage , de 6% pour les projets de 800KЄ à 1MЄ",
  },
  {
    col1: "800KЄ - 1MЄ",
    col2: "6%",
    col3: "Tarification au pourcentage , de 6% pour les projets de 800KЄ à 1MЄ",
  },
  {
    col1: "1 MЄ et plus",
    col2: "4%",
    col3: "Tarification au pourcentage , de 4% pour les projets de 1MЄ et plus",
  },
  { col1: "PARTIE IMMOBILIERE", col2: "Variable", col3: "" },
  {
    col1: "0 - 300KЄ",
    col2: "10KЄ",
    col3: "Tarification fixe de 10KЄ pour les projets immobiliers de 0 à 300MЄ",
  },
  {
    col1: "300KЄ - 500KЄ",
    col2: "15KЄ",
    col3: "Tarification fixe de 15KЄ pour les projets immobiliers de 300KЄ à 500MЄ",
  },
  {
    col1: "500KЄ - 750KЄ",
    col2: "20KЄ",
    col3: "Tarification fixe de 20KЄ pour les projets immobiliers de 500KЄ à 750MЄ",
  },
  {
    col1: "750KЄ - 1MЄ",
    col2: "25kЄ",
    col3: "Tarification fixe de 25KЄ pour les projets immobiliers de 750KЄ à 1MЄ",
  },
  {
    col1: "1MЄ et plus",
    col2: "30KЄ + 3%",
    col3: "Tarification fixe de 30KЄ plus 3% du montant excedant 1MЄ pour les projets immobilieres de 1MЄ et plus",
  },
];

const ServicesTable = () => {
  return (
    <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg mt-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-50 dark:text-gray-400" id="tableau">
          <tr>
            <th scope="col" className="px-6 py-3">
              Type de prestation
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Tarifs ( Є / % )
            </th>
            <th scope="col" className="px-6 py-3">
              Détails
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b " id="tab">
              <td className="px-6 py-4 min-w-44">{item.col1}</td>
              <td className="px-6 py-4 min-w-36">{item.col2}</td>
              <td className="px-6 py-4 min-w-80">{item.col3 || "---"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
