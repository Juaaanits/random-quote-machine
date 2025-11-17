'use client';

interface HeaderProps {
  title?: string;
}

// Presents the main application heading with consistent alignment.
export default function Header({ title = 'Quote of the Day' }: HeaderProps) {
  return (
    <h1
      style={{
        textAlign: 'center',
        marginTop: 0,
      }}
    >
      {title}
    </h1>
  );
}

