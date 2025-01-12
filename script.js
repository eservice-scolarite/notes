document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const codeMassar = document.getElementById('massar').value;

    // Données de l'étudiant
    const studentData = {
        "R134599413": {
            nom: "HADRI",
            prenom: "LAMYAE",
            modules: {
                "DROIT GÉNÉRAL": 15.50,
                "MICROÉCONOMIE": 14.75,
                "COMPTABILITÉ GÉNÉRALE": 15.25,
                "MANAGEMENT": 16.00,
                "MATHÉMATIQUE APPLIQUÉE": 13.50,
                "LANGUE ÉTRANGÈRE": 15.25,
                "MÉTHODOLOGIE DE TRAVAIL UNIVERSITAIRE": 18.00
            }
        }
    };

    const result = studentData[codeMassar];

    if (result) {
        document.getElementById('result').classList.remove('hidden');
        const tableBody = document.getElementById('studentInfo');

        // Calcul de la moyenne
        const notes = Object.values(result.modules);
        const moyenne = (notes.reduce((sum, note) => sum + note, 0) / notes.length).toFixed(2);

        // Construction du tableau
        let modulesHTML = "";
        for (const [module, note] of Object.entries(result.modules)) {
            modulesHTML += `<tr><td colspan="3">${module}</td><td>${note}</td></tr>`;
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
                <td>${moyenne}</td>
            </tr>
        `;
    } else {
        alert("Code Massar non trouvé !");
    }
});
