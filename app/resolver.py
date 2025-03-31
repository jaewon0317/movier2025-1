import pandas as pd

def random_items():
    movies_df = pd.read_csv('data/movies_final.csv')
    movies_df = movies_df.fillna('')
    result_items = movies_df.sample(n =10).to_dict('records')
    return result_items

def random_genres_items(genre):
    movies_df = pd.read_csv('data/movies_final.csv')
    genre_df = movies_df[movies_df['genres'].apply(lambda x: genre in x.lower())]
    genre_df = genre_df.fillna('')
    # 선택한 장르의 갯수가 5보다 적은 경우 처리해야함.
    nitem = min(5,genre_df.size)
    result_items = genre_df.sample(nitem=5).to_dict('records')
    return result_items

# 1.지정된 장르를 포함하는 영화중 평점(rmean)이 높은 5개의 영화를 추천함 ,2.rcount가 5보다 커야함
def random_genres_items_best(genre):
    movies_df = pd.read_csv('data/movies_final.csv')
    genre_df = movies_df[movies_df['genres'].apply(lambda x: genre in x.lower())]
    genre_df = genre_df.fillna('')
    result_items = genre_df[genre_df['rcount'] >= 5].sort_values(by='rmean', ascending=False).head(5).to_dict('records')
    return result_items