"""
Paleta e estilo Divergence Point para gráficos (matplotlib/seaborn).

Uso:
    import dp_style

    dp_style.apply()  # aplica o visual (fundo, fonte, grade) uma vez no notebook/script

    cores = dp_style.SUBJECT_COLORS
    ax.bar(df["materia"], df["valor"], color=df["materia"].map(cores))
"""

import matplotlib.pyplot as plt

# cores "chart-safe": versões de meio-tom que funcionam tanto no slide
# escuro (fundo tinta) quanto no claro (fundo creme) — diferente das
# variáveis --azul/--laranja/--prata do CSS, que têm um valor pra cada
# tema. Aqui é UM valor só, pensado pra funcionar nos dois.
PALETTE = {
    "azul": "#3E7FD1",
    "laranja": "#E07A2E",
    "prata": "#6E7C93",
    "verde": "#1FA97A",
    "vermelho": "#D14E4E",
}

# mapeamento FIXO categoria -> cor. É isso que garante que "Física"
# seja sempre a mesma cor em qualquer gráfico, não importa a ordem
# dos dados ou quais matérias aparecem naquele gráfico específico.
SUBJECT_COLORS = {
    "Física": PALETTE["azul"],
    "Matemática": PALETTE["prata"],
    "Computação": PALETTE["laranja"],
}

TEXT_COLOR = "#6E7C93"   # cinza médio: legível em fundo claro e escuro
GRID_COLOR = "#6E7C93"


def apply():
    """Aplica o estilo globalmente (chamar uma vez, antes de plotar)."""
    plt.rcParams.update({
        "figure.facecolor": "none",
        "axes.facecolor": "none",
        "savefig.facecolor": "none",   # fundo transparente ao salvar
        "savefig.transparent": True,
        "axes.edgecolor": TEXT_COLOR,
        "axes.labelcolor": TEXT_COLOR,
        "text.color": TEXT_COLOR,
        "xtick.color": TEXT_COLOR,
        "ytick.color": TEXT_COLOR,
        "grid.color": GRID_COLOR,
        "grid.alpha": 0.25,
        "axes.prop_cycle": plt.cycler(color=list(PALETTE.values())),
        "font.family": "sans-serif",
        "font.sans-serif": ["Manrope", "DejaVu Sans", "Arial"],
        "axes.spines.top": False,
        "axes.spines.right": False,
    })
