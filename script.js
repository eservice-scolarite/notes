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

        // Déterminer le résultat global
        let globalResult = "V"; // Par défaut, on suppose que l'étudiant a validé
        for (const note of Object.values(result.modules)) {
            if (note < 10) {
                globalResult = "RAT";
                break; // Si un module est en dessous de 10, le résultat global est "RAT"
            }
        }

        // Construction du tableau
        let modulesHTML = "";
        for (const [module, note] of Object.entries(result.modules)) {
            const moduleResult = note >= 10 ? "V" : "RAT";
            modulesHTML += `<tr><td colspan="3">${module}</td><td>${moduleResult}</td></tr>`;
        }

        tableBody.innerHTML = `
            <tr>
                <td>${result.nom}</td>
                <td>${result.prenom}</td>
                <td>${codeMassar}</td>
                <td>
                    <table style="width: 100%; border: none;">
                        ${modulesHTML}
                    </table>
                </td>
                <td>${globalResult}</td>
            </tr>
        `;
    } else {
        alert("Code Massar non trouvé !");
    }
});
