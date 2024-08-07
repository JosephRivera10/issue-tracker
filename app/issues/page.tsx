import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import '../theme.config.css';

const IssuesPage = () => {
  return (
    <div>
      IssuesPage
      <Button>
        <Link href='/issues/new'>
          New Issue
        </Link>
      </Button>
    </div>
  )
}

export default IssuesPage
