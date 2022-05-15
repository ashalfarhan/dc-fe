import { useTheme } from '@hooks';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useTheme', () => {
  it('should return initial', () => {
    const { result } = renderHook(useTheme);
    expect(result.current[0]).toBe('light');
  });

  it('should toggle', () => {
    const { result } = renderHook(useTheme);
    act(result.current[1]);

    expect(result.current[0]).toBe('dark');
  });
});
