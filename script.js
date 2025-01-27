document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'actualisation de la page

    const codeMassar = document.getElementById('massar').value;

    // Données des étudiants
    const studentData = {
        "R134599413": {
            nom: "HADRI",
            prenom: "LAMYAE",
            modules: {
                "DROIT GÉNÉRAL": 14.75,
                "MICROÉCONOMIE": 14.75,
                "COMPTABILITÉ GÉNÉRALE": 15.25,
                "MANAGEMENT": 16.00,
                "MATHÉMATIQUE APPLIQUÉE": 10.75,
                "LANGUE ÉTRANGÈRE": 15.25,
                "MÉTHODOLOGIE DE TRAVAIL UNIVERSITAIRE": 18.00
            }
        }
    };

    const result = studentData[codeMassar];

    if (result) {
        // Rendre la section des résultats visible
        document.getElementById('result').classList.remove('hidden');
        const tableBody = document.getElementById('studentInfo');

        // Générer le contenu des modules
        let modulesHTML = "";
        for (const [module, note] of Object.entries(result.modules)) {
            const status = note >= 10 ? "V" : "RAT";
            modulesHTML += `<tr><td>${module}</td><td>${note}</td><td>${status}</td></tr>`;
        }

        // Insérer les informations dans le tableau principal
        tableBody.innerHTML = `
            <tr>
                <td>${result.nom}</td>
                <td>${result.prenom}</td>
                <td>${codeMassar}</td>
                <td>
                    <table style="width: 100%; border: none;">
                        <thead>
                            <tr>
                                <th>Module</th>
                                <th>Note</th>
                                <th>Résultat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${modulesHTML}
                        </tbody>
                    </table>
                </td>
                <td>V</td>
            </tr>
        `;
    } else {
        // Alerte si le code Massar est invalide
        alert("Code Massar non trouvé !");
    }
});
