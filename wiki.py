from fastapi import FastAPI, HTTPException, Form, Query
import wikipedia

app = FastAPI()

@app.get("/{search}")
def wiki(search: str, summary_length: int = Query(100)):
    try:
        page = wikipedia.page(search)
        return {
            "title": page.title,
            "summary": page.summary[:summary_length],
        }
    except wikipedia.exceptions.DisambiguationError:
        raise HTTPException(status_code=400, detail="Уточните запрос. Найдено несколько страниц.")
    except wikipedia.exceptions.HTTPTimeoutError:
        raise HTTPException(status_code=500, detail="Произошла ошибка при запросе к Википедии.")
    except wikipedia.exceptions.PageError:
        raise HTTPException(status_code=404, detail="Страница не найдена.")

@app.post("/search")
def search_wiki(search: str = Form(...), summary_length: int = Form(100)):
    try:
        page = wikipedia.page(search)
        return {
            "title": page.title,
            "summary": page.summary[:summary_length],
        }
    except wikipedia.exceptions.DisambiguationError:
        raise HTTPException(status_code=400, detail="Уточните запрос. Найдено несколько страниц.")
    except wikipedia.exceptions.HTTPTimeoutError:
        raise HTTPException(status_code=500, detail="Произошла ошибка при запросе к Википедии.")
    except wikipedia.exceptions.PageError:
        raise HTTPException(status_code=404, detail="Страница не найдена.")

