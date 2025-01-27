document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const codeMassar = document.getElementById('massar').value;

    // Données de l'étudiant
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
        document.getElementById('result').classList.remove('hidden');
        const tableBody = document.getElementById('studentInfo');

        // Construction du tableau
        let modulesHTML = "";
        for (const [module, note] of Object.entries(result.modules)) {
            const moduleResult = note >= 10 ? "V" : "RAT"; // Détermine le résultat du module
            modulesHTML += `
                <tr>
                    <td>${result.nom}</td>
                    <td>${result.prenom}</td>
                    <td>${codeMassar}</td>
                    <td>${module}</td>
                    <td>${note}</td>
                    <td>${moduleResult}</td>
                </tr>
            `;
        }

        tableBody.innerHTML = modulesHTML;
    } else {
        alert("Code Massar non trouvé !");
    }
});
    } else {
        alert("Code Massar non trouvé !");
    }
});
