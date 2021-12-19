/*
 * @Author: 邱彦兮
 * @Date: 2021-12-19 14:26:50
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2021-12-19 22:13:48
 * @FilePath: /Simpler-Components/src/Dialog/index.tsx
 */
import Button from '@/Button';
import React, { useRef, useEffect } from 'react';
import InnerDialog from './style';
import { ButtonProps } from '../Button';

type DialogBasicProps = {
  /**
   * @description 是否显示模态框
   */
  visible: boolean;
  /**
   * @description 自定义header
   */
  header?: React.ReactNode;
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * @description 取消的icon
   */
  closeIcon?: React.ReactNode;
  /**
   * @description 点击蒙层是否关闭
   * @default true
   */
  maskClosable?: boolean;
  /**
   * @description 模态框的宽度
   * @default 600
   */
  width?: number;
  /**
   * @description 是否需要模糊效果
   * @default false
   */
  filter?: boolean;
  /**
   * @description body内容的样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * @description 是否显示右上角关闭按钮
   */
  closable?: boolean;
  /**
   * @description 自定义footer
   */
  footer?: React.ReactNode[];
  /**
   * @description 点击确认的回调
   */
  onOk?: (...rest) => any;
  /**
   * @description 隐藏模态框的回调
   */
  onCancel: () => void;
  /**
   * @description 取消按钮的文字
   * @default 取消
   */
  cancelText?: string;
  /**
   * @description 确定按钮的文字
   * @default 确定
   */
  okText?: string;
  /**
   * @description 透传给默认取消按钮的props
   * @default  {btnType: 'danger'}
   */
  cancelBtnProps?: ButtonProps;
  /**
   * @description 透传给默认确定按钮的props
   * @default  {btnType: 'primary'}
   */
  okBtnProps?: ButtonProps;
};
const style = document.createElement('style');
const Dialog: React.FC<DialogBasicProps> = (props) => {
  const {
    visible,
    onCancel,
    header,
    title,
    closeIcon,
    bodyStyle,
    footer,
    onOk,
    maskClosable = true,
    width = 600,
    filter = false,
    closable = true,
    cancelText = '取消',
    okText = '确定',
    okBtnProps = { btnType: 'primary' },
    cancelBtnProps = { btnType: 'danger' },
  } = props;
  const ref = useRef<HTMLDialogElement | null>(null);

  const action = {
    root: document.body,
    style: filter && style,
    hiddenDialog() {
      filter && this.removeFilterStyle();
      ref.current!.close();
    },
    openDialog() {
      filter && this.addFilterStyle();
      ref.current!.showModal();
    },
    addFilterStyle() {
      this.root.className = 'simpler_dialog_filter';
      this.style.innerHTML = `
      .simpler_dialog_filter{
        transition:.3s filter;
        filter:blur(2px)
      }
      `;
      document.head.appendChild(this.style);
    },
    removeFilterStyle() {
      this.style.remove();
    },
    onOk() {
      onOk && onOk();
    },
  };
  useEffect(() => {
    if (visible) {
      action.openDialog();
    } else {
      action.hiddenDialog();
    }
  }, [visible]);

  useEffect(() => {
    const close = (e) => {
      if (e.target!.tagName.toLowerCase() === 'dialog') {
        maskClosable && onCancel();
      }
    };
    window.addEventListener('click', close);

    return () => {
      window.removeEventListener('click', close);
    };
  }, []);
  return (
    <InnerDialog ref={ref} width={width}>
      <section className="simpler_dialog_container">
        <header>
          <div>
            {header || <div className="simpler_dialog_title">{title}</div>}
          </div>
          {closable && (
            <div className="simpler_dialog_close" onClick={onCancel}>
              <span>{closeIcon || 'X'}</span>
            </div>
          )}
        </header>
        <main>
          <div style={bodyStyle}>{props.children}</div>
        </main>
        <footer>
          {footer ||
            [
              <Button onClick={onCancel} {...cancelBtnProps} key="cancel">
                {cancelText}
              </Button>,
              <Button
                onClick={action.onOk.bind(action)}
                {...okBtnProps}
                key="ok"
              >
                {okText}
              </Button>,
            ].map((item) => {
              return item;
            })}
        </footer>
      </section>
    </InnerDialog>
  );
};

export default Dialog;
