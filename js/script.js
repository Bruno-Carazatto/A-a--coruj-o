/* =========================================================
   AÇAÍ CORUJÃO
   Interatividade do pedido
========================================================= */


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const whatsappNumber = "5519994523566";

const maxFreeExtras = 4;


/* =========================================================
   ELEMENTOS
========================================================= */

const sizeInputs = document.querySelectorAll(
    'input[name="tamanho"]'
);

const freeExtrasInputs = document.querySelectorAll(
    '#freeExtras input[type="checkbox"]'
);

const specialExtrasInputs = document.querySelectorAll(
    '#specialExtras input[type="checkbox"]'
);

const freeExtrasCounter = document.getElementById(
    "freeExtrasCounter"
);

const summarySize = document.getElementById(
    "summarySize"
);

const summaryFreeExtras = document.getElementById(
    "summaryFreeExtras"
);

const summarySpecialExtras = document.getElementById(
    "summarySpecialExtras"
);

const summaryTotal = document.getElementById(
    "summaryTotal"
);

const orderObservation = document.getElementById(
    "orderObservation"
);

const sendWhatsAppButton = document.getElementById(
    "sendWhatsApp"
);


/* =========================================================
   ESTADO DO PEDIDO
========================================================= */

const order = {
    size: "",
    basePrice: 0,
    freeExtras: [],
    specialExtras: []
};


/* =========================================================
   FORMATAÇÃO DE MOEDA
========================================================= */

function formatCurrency(value) {

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value);

}


/* =========================================================
   TAMANHO
========================================================= */

sizeInputs.forEach((input) => {

    input.addEventListener("change", () => {

        order.size = input.value;

        order.basePrice = Number(
            input.dataset.price
        );

        updateSummary();

    });

});


/* =========================================================
   ADICIONAIS GRATUITOS
========================================================= */

freeExtrasInputs.forEach((input) => {

    input.addEventListener("change", () => {

        const selectedInputs = [
            ...freeExtrasInputs
        ].filter((item) => item.checked);


        /*
         * O cardápio permite até 4 adicionais gratuitos.
         * Caso o usuário tente marcar o quinto,
         * desfazemos a última seleção.
         */
        if (selectedInputs.length > maxFreeExtras) {

            input.checked = false;

            alert(
                `Você pode escolher até ${maxFreeExtras} adicionais gratuitos.`
            );

            return;

        }


        order.freeExtras = selectedInputs.map(
            (item) => item.value
        );


        freeExtrasCounter.textContent =
            order.freeExtras.length;


        updateSummary();

    });

});


/* =========================================================
   ADICIONAIS ESPECIAIS
========================================================= */

specialExtrasInputs.forEach((input) => {

    input.addEventListener("change", () => {

        order.specialExtras = [
            ...specialExtrasInputs
        ]
            .filter((item) => item.checked)
            .map((item) => {

                return {

                    name: item.value,

                    price: Number(
                        item.dataset.price
                    )

                };

            });


        updateSummary();

    });

});


/* =========================================================
   CALCULAR TOTAL
========================================================= */

function calculateTotal() {

    const specialTotal =
        order.specialExtras.reduce(
            (total, item) => {

                return total + item.price;

            },
            0
        );


    return order.basePrice + specialTotal;

}


/* =========================================================
   ATUALIZAR LISTAS
========================================================= */

function renderList(
    element,
    items,
    formatter
) {

    element.innerHTML = "";


    if (items.length === 0) {

        const li =
            document.createElement("li");

        li.textContent =
            "Nenhum item selecionado.";

        element.appendChild(li);

        return;

    }


    items.forEach((item) => {

        const li =
            document.createElement("li");


        li.textContent =
            formatter
                ? formatter(item)
                : item;


        element.appendChild(li);

    });

}


/* =========================================================
   ATUALIZAR RESUMO
========================================================= */

function updateSummary() {

    summarySize.textContent =
        order.size || "Não selecionado";


    renderList(
        summaryFreeExtras,
        order.freeExtras
    );


    renderList(
        summarySpecialExtras,
        order.specialExtras,
        (item) =>
            `${item.name} — ${formatCurrency(item.price)}`
    );


    summaryTotal.textContent =
        formatCurrency(
            calculateTotal()
        );

}


/* =========================================================
   CRIAR MENSAGEM DO WHATSAPP
========================================================= */

function createWhatsAppMessage() {

    if (!order.size) {

        alert(
            "Escolha o tamanho do seu açaí antes de enviar o pedido."
        );

        return null;

    }


    const total =
        calculateTotal();


    let message =
`Olá, Açaí Corujão! 🦉

Gostaria de fazer um pedido.

🥤 *Tamanho:*
${order.size}

🍓 *Adicionais gratuitos:*
`;


    if (order.freeExtras.length > 0) {

        order.freeExtras.forEach(
            (extra) => {

                message += `• ${extra}\n`;

            }
        );

    } else {

        message += "Nenhum adicional\n";

    }


    message += `
✨ *Adicionais especiais:*
`;


    if (order.specialExtras.length > 0) {

        order.specialExtras.forEach(
            (extra) => {

                message +=
                    `• ${extra.name} - ${formatCurrency(extra.price)}\n`;

            }
        );

    } else {

        message += "Nenhum adicional especial\n";

    }


    const observation =
        orderObservation.value.trim();


    if (observation) {

        message += `
📝 *Observação:*
${observation}
`;

    }


    message += `
💰 *Total estimado:*
${formatCurrency(total)}

Pedido enviado pelo site do Açaí Corujão.
`;


    return message;

}


/* =========================================================
   ENVIAR PARA WHATSAPP
========================================================= */

sendWhatsAppButton.addEventListener(
    "click",
    () => {

        const message =
            createWhatsAppMessage();


        if (!message) {
            return;
        }


        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }
);


/* =========================================================
   ANO AUTOMÁTICO DO FOOTER
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   FECHAR MENU MOBILE AO CLICAR EM UMA ÂNCORA
========================================================= */

const menuLinks =
    document.querySelectorAll(
        "#menuPrincipal .nav-link"
    );


menuLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            const menu =
                document.getElementById(
                    "menuPrincipal"
                );


            if (
                menu.classList.contains(
                    "show"
                )
            ) {

                const bootstrapMenu =
                    bootstrap.Collapse.getOrCreateInstance(
                        menu
                    );


                bootstrapMenu.hide();

            }

        }
    );

});


/* =========================================================
   ESTADO INICIAL
========================================================= */

updateSummary();