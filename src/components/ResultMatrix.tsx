import React from 'react';
import type { GridItem } from './QuestionGrid';

export function ResultMatrix(props: { items: GridItem[]; title?: string }) {
  const title = (props.title ?? '').trim();
  return (
    <div aria-label={title || 'Result Matrix'}>
      {title ? (
        <div className="muted" style={{ marginBottom: 10, fontSize: 14 }}>
          {title}
        </div>
      ) : null}

      <div className="grid reportGrid" aria-label="Per-question correctness matrix">
        {props.items.map((it) => {
          const cls = ['qbtn', 'static', it.className].filter(Boolean).join(' ');
          return (
            <div key={it.id} className={cls} title={`第 ${it.index + 1} 题`}>
              {it.index + 1}
              {it.mark ? <span className="mark">{it.mark}</span> : null}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <span className="badge success">✓ 正确</span>
        <span className="badge danger">✗ 错误</span>
        <span className="badge">未答</span>
      </div>
    </div>
  );
}

