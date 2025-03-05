from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/load_video', methods=['POST'])
def load_video():
    video_id = request.form.get('videoId')
    if not video_id:
        return jsonify({'error': 'Invalid video ID'}), 400
    # You can use the video_id to fetch video details using YouTube API if needed
    return jsonify({'message': 'Video loaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)