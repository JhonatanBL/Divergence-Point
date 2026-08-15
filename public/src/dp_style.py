"""
Paleta e estilo Divergence Point para gráficos (matplotlib/seaborn/plotly).

Uso (matplotlib/seaborn):
    import dp_style
    dp_style.apply()  # aplica o visual (fundo, fonte, grade) uma vez no notebook/script
    cores = dp_style.SUBJECT_COLORS
    ax.bar(df["materia"], df["valor"], color=df["materia"].map(cores))

Uso (plotly, gráfico interativo):
    import plotly.express as px
    from IPython.display import HTML
    import dp_style

    fig = px.line(df, x="x", y="y")
    fig = dp_style.plotly(fig)
    HTML(fig.to_html(include_plotlyjs=True, full_html=False))

    IMPORTANTE: use exatamente esse padrão (to_html + HTML), NÃO fig.show().
    fig.show() faz o Reveal carregar a biblioteca do plotly.js de um CDN
    toda vez que o slide abre — se não tiver internet na hora da aula
    (ou o wifi da sala cair), o gráfico simplesmente não aparece. Com
    include_plotlyjs=True a biblioteca inteira vai embutida no próprio
    HTML exportado (~3-4 MB a mais no arquivo, mas funciona 100% offline,
    igual o resto da aula).

    Se tiver MAIS de um gráfico plotly na mesma aula, embuta a biblioteca
    só uma vez (no primeiro) e reaproveite nos demais:
        HTML(fig.to_html(include_plotlyjs=True, full_html=False))   # 1º gráfico
        HTML(fig2.to_html(include_plotlyjs=False, full_html=False)) # os próximos
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

TEXT_COLOR = "#6E7C93"          # cinza médio: legível em fundo claro e escuro
GRID_COLOR = "#6E7C93"
GRID_COLOR_SOFT = "rgba(110, 124, 147, 0.25)"   # mesma cor, com a transparência que o plotly não herda do matplotlib


def apply():
    """Aplica o estilo globalmente pro matplotlib (chamar uma vez, antes de plotar)."""
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


def plotly(fig, legend=True):
    """Aplica o estilo Divergence Point a uma figura Plotly: fundo
    transparente (se encaixa no slide, claro ou escuro), paleta e
    tipografia consistentes com o resto da aula, grade discreta.

    Chamar depois de montar a figura:
        fig = px.bar(df, x="x", y="y", color="categoria")
        fig = dp_style.plotly(fig)
    """
    fig.update_layout(
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
        font=dict(family="Manrope, sans-serif", color=TEXT_COLOR, size=13),
        colorway=list(PALETTE.values()),
        margin=dict(l=50, r=20, t=40, b=40),
        showlegend=legend,
        legend=dict(font=dict(color=TEXT_COLOR), bgcolor="rgba(0,0,0,0)"),
        hoverlabel=dict(
            bgcolor="#1B1F29",
            font_color="#EDEEF2",
            font_family="Manrope, sans-serif",
            bordercolor=PALETTE["azul"],
        ),
    )
    fig.update_xaxes(
        gridcolor=GRID_COLOR_SOFT, zerolinecolor=GRID_COLOR_SOFT, color=TEXT_COLOR
    )
    fig.update_yaxes(
        gridcolor=GRID_COLOR_SOFT, zerolinecolor=GRID_COLOR_SOFT, color=TEXT_COLOR
    )
    return fig
