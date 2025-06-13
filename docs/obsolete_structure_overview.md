# Piphawk AI 

以下は、コードベースに残る未使用または形骸化した要素の整理メモです。

## 非推奨モジュール
- `backend/strategy/entry_ai_decision.py` と `exit_ai_decision.py` は内部で新実装に即座に委譲しており、実質的にスタブです。

## 戦略クラスの冗長性
- `strategies/` 配下の `ScalpStrategy` や `TrendStrategy` などのクラスは、デフォルトのAI多数決パイプラインを無効にしない限り使用されません。テストや非常時のフォールバック用途のみであり、通常動作では無視されます。

## モード判定ロジックの重複
- 旧実装 `signals/composite_mode.py` はLLMを使ったモード判断を行いますが、現在は `analysis/detect_mode.py` を中心としたローカル判定へ移行済みです。`composite_mode.py` はほぼ利用されていません。

## 環境変数の整理不足
- `AI_RETRY_ON_NO` や `MODE_SELECTOR` など、コード上では参照されない設定項目が残っています。READMEでも廃止を示唆しており、混乱の要因となっています。

## 旧分析スクリプト
- `analysis/` ディレクトリにはバックテスト用ノートブック等が含まれますが、実運用には関係ありません。

## UI/フロントエンド関連
- React製ダッシュボード(`piphawk-ui/`)やREST API機能は、取引ロジックと独立しており、使用しない場合は読み飛ばして構いません。

